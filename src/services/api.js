import axios from "axios";

const API_URL = "https://filesharingnodejs-production.up.railway.app";

export const uploadFile = async (data) => {
  try {
    console.log(data);
    let res = await axios.post(`${API_URL}/upload`, data);
    return res.data;
  } catch (error) {
    console.error("Error while calling the api ", error.message);
  }
};
