import { API_URL } from "../Constants/apiUrl";
import axiosService from "../Commons/axiosService";
const endpoint = "proList";
export const getProListAPI = () => {
  return axiosService.get(`${API_URL}/${endpoint}`);
};
export const getProDetailAPI = (id:number) => {
  return axiosService.get(`${API_URL}/${endpoint}/${id}`);
}
