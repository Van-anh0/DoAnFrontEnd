import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const cinemaApi = {
  // seat
  getListCinema: async (movieId, day) => {
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/cinema/get-list`,
      {
        params: {
          sort: "name",
          movie_id: movieId,
          day: day,
        },
      }
    );
    return request.data;
  },
};

export default cinemaApi;
