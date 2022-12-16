import authorizedAxiosInstance from '../../utils/customAxios'
import { API_ROOT_GOLANG } from '../../utils/constants'

// export const updateBoardAPI = async (id, data) => {
//   const request = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/${id}`, data)
//   return request.data
// }

export const checkHealth = async () => {
  const request = await authorizedAxiosInstance.get(`${API_ROOT_GOLANG}/status`)
  return request.data
}

export const getListMovie = async () => {
  const request = await authorizedAxiosInstance.get(`${API_ROOT_GOLANG}/api/v1/movie/get-list`)
  return request.data
}

export const getOneMovie = async (id) => {
  const request = await authorizedAxiosInstance.get(`${API_ROOT_GOLANG}/api/v1/movie/get-one/${id}`)
  return request.data
}


export const getListMovieTheater = async () => {
  const request = await authorizedAxiosInstance.get(`${API_ROOT_GOLANG}/api/v1/movie-theater/get-list`)
  return request.data
}

