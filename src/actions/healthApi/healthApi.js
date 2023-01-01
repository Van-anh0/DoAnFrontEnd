import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const seatApi = () => {
  // seat
  const getListSeat = async () => {
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
};

export default seatApi