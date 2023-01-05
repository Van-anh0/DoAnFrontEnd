import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const movieApi = {
  getListMovie: async (data) => {
    let params = {
      params: data,
    };
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/movie/get-list`,
      params
    );
    return request.data;
  },

  getOneMovie: async (id) => {
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/movie/get-one/${id}`
    );
    return request.data;
  },
};

export default movieApi;
