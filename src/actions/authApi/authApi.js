import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const authApi = {
  register: async (data) => {
    console.log("data: ", data);
    const request = await authorizedAxiosInstance.post(
      `${API_ROOT_GOLANG}/api/v1/auth/register`,
      data
    );
    return request.data;
  },
};

export default authApi;
