import HttpService from "../httpServices";
import useMutateItem from "../useMutateItem";
import { routes } from "../apiRoutes";
import { ErrorHandler } from "../errorHandler";
import Storage from "../storage"

const httpService = new HttpService();
const storage = new Storage()

export const useSignup = (handleSuccess) => {
  const { data, error, isPending, mutate ,isSuccess} = useMutateItem({
    mutationFn: (payload) => httpService.postDataWithoutToken(payload, routes.signup()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      // console.log(requestParams?.data);
       handleSuccess(resData);
    },
  });

  return {
    signupData: data?.message|| "",
    signupError: ErrorHandler(error),
    signupIsLoading: isPending,
    signupPayload: (requestPayload) => mutate(requestPayload),
    signupIsSuccess: isSuccess
  };
};

export const useVerifyEmail =(handleSuccess)=>{
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: (payload) => httpService.postDataWithoutToken(payload, routes.restaurantVerifyMail()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      // console.log(requestParams?.data);
      handleSuccess(resData);
    },
  });

  return {
    verifyEmailData: data,
    verifyEmailError: ErrorHandler(error),
    verifyEmailIsLoading: isPending,
    verifyEmailPayload: (requestPayload) => mutate(requestPayload),
  };
}

export const useLoginWithEmail = (handleSuccess) => {
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: (payload) =>
      httpService.postDataWithoutToken(payload, routes.loginWithEmail()),

    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};

      if (typeof window !== "undefined" && resData?.access && resData?.refresh) {
        try {
          Storage.set("accessToken", resData.access);
          Storage.set("refreshToken", resData.refresh);
          Storage.set("user_id", resData.user_id || "");
          Storage.set("actor_type", resData.actor_type || "");
        } catch (storageError) {
          console.error("Storage error:", storageError);
        }
      }
      if (typeof handleSuccess === "function") {
        handleSuccess(resData);
      }
    },
    onError: (err) => {
      console.error("Login error:", err);
    },
  });

  return {
    loginWithEmailData: data?.data,
    loginWithEmailError: ErrorHandler(error),
    loginWithEmailLoading: isPending,
    loginWithEmailPayload: (requestPayload) => {
      if (!requestPayload?.email || !requestPayload?.password) {
        console.error("Invalid payload: Missing email or password");
        return;
      }
      mutate(requestPayload);
    },
  };
};


export const useLoginWithPhoneNumber = (handleSuccess) => {
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: (payload) =>
      httpService.postDataWithoutToken(payload, routes.loginWithPhonenumber()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      if (typeof window !== "undefined") {
        Storage.set("accessToken", resData?.access);
        Storage.set("refreshToken", resData?.refresh);
        Storage.set("user_id", resData?.user_id);
        Storage.set("actor_type", resData?.actor_type);

      }

      handleSuccess(resData);
    },
  });
  return {
    loginWithPhoneNumberData: data,
    loginWithPhoneNumberError: ErrorHandler(error),
    loginWithPhoneNumberIsLoading: isPending,
    loginWithPhoneNumberPayload: (requestPayload) => mutate(requestPayload),
  };
};

export const useResendEmail =(handleSuccess)=>{
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: (payload) => httpService.postDataWithoutToken(payload, routes.resendEmail()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      console.log(requestParams?.data);
      handleSuccess(resData);
    },
  });

  return {
    resendEmailData: data,
    resendEmaiError: ErrorHandler(error),
    resendEmaiIsLoading: isPending,
    resendEmaiPayload: (requestPayload) => mutate(requestPayload),
  };
}
