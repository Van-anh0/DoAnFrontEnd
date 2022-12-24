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
export const getListMovie = async (data) => {
  let params = {
    params: {
      status: data?.status,
      search: data?.search,
      day: data?.day,
      movie_theater_id: data?.movie_theater_id,
    },
  };
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie/get-list`,
    params
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
export const getListMovieTheater = async (movie_id, day) => {
  let params = {
    movie_id: movie_id,
    day: day,
  };
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie-theater/get-list`,
    params
  );
  return request.data;
};

// search movie
export const getMovieSearch = async (name) => {
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/movie-theater/get-list`,
    {
      params: {
        filter: `name,${name}`,
      },
    }
  );
  return request.data;
};

// showtime
export const getListShowTime = async (movieId) => {
  let params = {
    sort: "start_time",
  };
  if (movieId) {
    params.filter = `movie_id,${movieId}`;
  }
  const request = await authorizedAxiosInstance.get(
    `${API_ROOT_GOLANG}/api/v1/showtime/get-list-group`,
    params
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
