import HttpService from "../../httpServices";
import useMutateItem from "../../useMutateItem";
import {routes} from "../../apiRoutes"
import { ErrorHandler } from "../../errorHandler";

const httpService = new HttpService

export const useLogout = () => {
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: (payload) =>
      httpService.postData(payload, routes.test()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      console.log(requestParams?.data);
      handleSuccess(resData);
    },
  });
  return {
    logoutData: data,
    logoutError: ErrorHandler(error),
    logoutIsLoading: isPending,
    logoutMutate: (requestPayload) => mutate(requestPayload),
  };
};
