import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const seatApi = {
  // seat
  getListSeat: async (showtimeId, roomId) => {
    
    console.log("showtime",showtimeId);
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/seat/get-list`,
      {
        params: {
          showtime_id: showtimeId,
          filter: "room_id," + roomId,
        },
      }
    );
    return request.data;
  },
};
export default seatApi;
