import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
