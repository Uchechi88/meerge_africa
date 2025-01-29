// /lib/hooks/form.ts
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useZodForm<T>(props: { schema: z.ZodSchema<T> }) {
  const { schema } = props;
//@ts-ignore
  const form = useForm<T>({
    resolver: async (data) => {
      try {
        schema.parse(data);  // Parse using zod schema
        return { values: data, errors: {} };
      } catch (e) {
        if (e instanceof z.ZodError) {
          return {
            values: {},
            errors: e.errors.reduce((acc, curr) => {
                //@ts-ignore
              acc[curr.path[0]] = {
                message: curr.message,
              };
              return acc;
            }, {}),
          };
        }
        return { values: {}, errors: {} };
      }
    },
  });

  return form;
}
