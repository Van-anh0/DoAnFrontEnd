import authorizedAxiosInstance from "../../utils/customAxios";
import { API_ROOT_GOLANG } from "../../utils/constants";

// status
export const checkHealth = async () => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/status`
  );
  return request.data;
};

// movie
export const getListMovie = async (status, search) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie/get-list`,
    {
      params: {
        status: status,
        search: search,
      },
    }
  );
  return request.data;
};

//sort movie status
export const getListMovieStatus = async (movieStatus) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie/get-list`,
    {
      params: {
        filter: `status,${movieStatus}`,
        
      },
    }
  );
  return request.data;
};

export const getOneMovie = async (id) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie/get-one/${id}`
  );
  return request.data;
};

// movie-theater
export const getListMovieTheater = async () => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie-theater/get-list`
  );
  return request.data;
};

// search movie
export const getMovieSearch = async (name) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie-theater/get-list`,
    {
      params:{
        filter:`name,${name}`,
      }
    }
  );
  return request.data;
};

// showtime
export const getListShowTime = async (movieId) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/showtime/get-list-group`,
    {
      params: {
        filter: `movie_id,${movieId}`,
        sort: "start_time",
      },
    }
  );
  return request.data;
};

// order
export const createOrder = async (data) => {
  const request = await authorizedAxiosInstance.post(
    `${API_ROOT_GOLANG}/api/v1/order/create`,
    data
  );
  return request.data;
};

// order
export const getListSeat = async () => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/seat/get-list`,
    {
      params: {
        sort: "name",
      },
    }
  );
  return request.data;
};

// auth
export const login = async (data) => {
  const request = await authorizedAxiosInstance.post(
    `${API_ROOT_GOLANG}/api/v1/auth/login`,
    data
  );
  return request.data;
};

export const register = async (data) => {
  const request = await authorizedAxiosInstance.post(
    `${API_ROOT_GOLANG}/api/v1/auth/register`,
    data
  );
  return request.data;
};
