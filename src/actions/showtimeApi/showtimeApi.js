import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const showtimeApi = {
  getListShowtime: async (movieId) => {
    let param = {
      sort: "showtime",
    };
    if (movieId) {
      param.filter = "movie_id," + movieId;
    }
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/show/get-list-group`,
      {
        params: param,
      }
    );
    return request.data;
  },
};
export default showtimeApi;
