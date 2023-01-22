import axios from "axios";

export  const postData = async (url: string, values: {}) => {
  return axios.post(`http://localhost:3001${url}`, values);
}

export  const getData = async (url: string, values: {}) => {
  return axios.get(`http://localhost:3001${url}`, values);
}

export  const getData1 = async (url: string) => {
  return axios.get(`http://localhost:3001${url}`);
}
