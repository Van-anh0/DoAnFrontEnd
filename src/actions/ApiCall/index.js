import authorizedAxiosInstance from "../../utils/customAxios";
import { API_ROOT_GOLANG } from "../../utils/constants";

export const checkHealth = async () => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/status`
  );
  return request.data;
};

export const getListMovie = async () => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie/get-list`
  );
  return request.data;
};

export const getOneMovie = async (id) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie/get-one/${id}`
  );
  return request.data;
};

export const getListMovieTheater = async () => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie-theater/get-list`
  );
  return request.data;
};

export const getListShowTime = async (movieId) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/showtime/get-list-group`,
    {
      params: {
        movie_id: movieId,
      },
    }
  );
  return request.data;
};

export const createOrder = async (data) => {
  const request = await authorizedAxiosInstance.post(
    `${API_ROOT_GOLANG}/api/v1/order/create`,
    data
  );
  return request.data;
};
