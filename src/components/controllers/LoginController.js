import { toast } from "react-toastify";
import { apiCall, apiMethods } from "../../service/axios/ApiHelper";
import { apiEndPoints } from "../../util/constant/UrlConstants";
import { globalMessages } from "../../util/constant/StringConstants";

export const loginApi = async (userData) => {
  console.log(userData);
  try {
    const loginResponse = await apiCall({
      method: apiMethods.POST,
      end: apiEndPoints.login,
      data: userData,
    });
    return loginResponse;
  } catch (error) {
    toast.error(globalMessages.errorOccurredWhileLogin);
  }
};
