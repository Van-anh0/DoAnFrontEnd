import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const showApi = {
  // seat
  getListShow: async (movieId) => {
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/show/get-list-group`,
      {
        params: {
          sort: "showtime",
          filter: "movie_id," + movieId,
        },
      }
    );
    return request.data;
  },
};
export default showApi;
