import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const productApi = {
  // seat
  getListProduct: async () => {
    const request = await authorizedAxiosInstance.get(
      `${API_ROOT_GOLANG}/api/v1/product/get-list`,
      {
        params: {
          sort: "name",
        },
      }
    );
    return request.data;
  },
};
export default productApi;
