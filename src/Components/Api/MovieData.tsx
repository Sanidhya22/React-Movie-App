import axios from "axios";
const url = "http://localhost:3000";

export const getallUsers = async (id: string) => {
  return await axios.get(`${url}/${id}`);
};
