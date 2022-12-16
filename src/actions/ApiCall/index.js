import authorizedAxiosInstance from '../../utils/customAxios'
import { API_ROOT_GOLANG } from '../../utils/constants'

// export const updateBoardAPI = async (id, data) => {
//   const request = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/${id}`, data)
//   return request.data
// }

export const checkHealth = async () => {
  const request = await authorizedAxiosInstance.put(`${API_ROOT_GOLANG}/status`)
  return request.data
}
