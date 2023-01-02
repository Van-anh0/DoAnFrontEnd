import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const orderApi = {
  createOrder: async (data) => {
    const request = await authorizedAxiosInstance.post(
      `${API_ROOT_GOLANG}/api/v1/order/create`,
      data
    );
    return request.data;
  },
};
export default orderApi;
