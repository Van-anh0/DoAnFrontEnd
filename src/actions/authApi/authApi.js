import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const authApi = () => {
  // auth
  const login = async (data) => {
    const request = await authorizedAxiosInstance.post(
      `${API_ROOT_GOLANG}/api/v1/auth/login`,
      data
    );
    return request.data;
  };

  const register = async (data) => {
    const request = await authorizedAxiosInstance.post(
      `${API_ROOT_GOLANG}/api/v1/auth/register`,
      data
    );
    return request.data;
  };
};

export default authApi;
