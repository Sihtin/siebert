import { toast } from "react-toastify";
import { apiCall, apiMethods } from "../../service/axios/ApiHelper";
import { apiEndPoints } from "../../util/constant/UrlConstants";
import { globalMessages } from "../../util/constant/StringConstants";
import { saveToLocalStorage } from "../../util/common/LocalStorageUtils";

export const logInApi = async (userData) => {
  try {
    const loginResponse = await apiCall({
      method: apiMethods.POST,
      endPoint: apiEndPoints.login,
      data: userData,
    });
    return loginResponse;
  } catch (error) {
    toast.error(globalMessages.errorOccurredWhileLogin);
  }
};

export const logOutApi = async () => {
  try {
    const loginResponse = await apiCall({
      method: apiMethods.POST,
      endPoint: apiEndPoints.logout,
    });
    localStorage.removeItem("isValidUser");
    return loginResponse;
  } catch (error) {
    toast.error(globalMessages.errorOccurredWhileLogin);
  }
};