import { getAccessToken } from "../lib/utils/server/auth";
import axios from "axios";

class HttpService {
  constructor() {
    // this.token = getAccessToken();
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL;
  }

  postData = async (payload, url) => {
    const AuthStr = "Bearer ".concat(getAccessToken());
    // console.log("token from HTTP: ",  {headers: { Authorization: AuthStr }});
    return axios.post(`${this.baseUrl}${url}`, payload, {
      headers: { Authorization: AuthStr },
    });
  };

  postDataWithoutToken = async (payload, url) => {
    // console.log("HTTP services: ", this.baseUrl);
    return axios.post(`${this.baseUrl}${url}`, payload);

  };

  getData = async (url,) => {
    // console.log(url);
    const AuthStr = "Bearer ".concat(getAccessToken());
    // console.log("AuthStr: =>", AuthStr);
    return axios.get(`${this.baseUrl}${url}`, {
      headers: { Authorization: AuthStr },
    });
  };

  getDataWithoutToken = async (url,) => {
    // console.log(`${this.baseUrl[`${services}`]}${url}`);
    return axios.get(`${this.baseUrl}${url}`);
  };

  putData = async (formData, url, services = "BASE_URL") => {
    const AuthStr = "Bearer ".concat(getAccessToken());
    return axios.put(`${this.baseUrl[`${services}`]}${url}`, formData, {
      headers: { Authorization: AuthStr },
    });
  };

  patchData = async (formData, url, services = "BASE_URL") => {
    const AuthStr = "Bearer ".concat(getAccessToken());
    return axios.patch(`${this.baseUrl[`${services}`]}${url}`, formData, {
      headers: { Authorization: AuthStr },
    });
  };

  putDataWithoutToken = async (formData, url, services = "BASE_URL") => {
    return axios.put(`${this.baseUrl[`${services}`]}${url}`, formData);
  };

  deleteData = async (url, services = "BASE_URL") => {
    const AuthStr = "Bearer ".concat(getAccessToken());
    return axios.delete(`${this.baseUrl[`${services}`]}${url}`, {
      headers: { Authorization: AuthStr },
    });
  };
}
export default HttpService;
