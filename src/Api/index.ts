import axios from "./Axios";

export const getallUsers = async (id: string) => {
  return await axios.get(`/${id}`);
};
// export const post = (url: string, data: unknown) => {
//   return axios.post(url, data);
// };
