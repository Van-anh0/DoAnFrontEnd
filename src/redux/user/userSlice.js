import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT_GOLANG } from "utils/constants";
import authorizedAxiosInstance from "utils/customAxios";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

export const loginAPI = createAsyncThunk("user/loginAPI", async (data) => {
  const request = await authorizedAxiosInstance.post(
    `${API_ROOT_GOLANG}/api/v1/auth/login`,
    data
  );
  return request.data;
});

export const registerAPI = createAsyncThunk(
  "user/registerAPI",
  async (showSuccessMsg = true) => {
    // const request = await authorizedAxiosInstance.delete(
    //   `${API_ROOT}/v1/auth/register`
    // );
    if (showSuccessMsg) {
      //   toast.success("User signed out successfuly.");
      console.log("user signed out successfully");
    }
    // customHistory.replace("/signIn");

    // return request.data;
    return true;
  }
);

// Khởi tạo một slice trong redux
export const userSlice = createSlice({
  name: "user",
  initialState,
  // đồng bộ
  reducers: {
    // Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
  // Bất đồng bộ
  extraReducers: (builder) => {
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      const user = action.payload;
      state.currentUser = user;
      state.isAuthenticated = true;
    });
  },
});

// Actions: dành cho các components bên dưới gọi tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const { clearCurrentUser } = userSlice.actions;

// Selectors: mục đích là dành cho các components bên dưới gọi tới nó để lấy dữ liệu từ trong redux store ra sử dụng
export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};
export const selectIsAuthenticated = (state) => {
  return state.user.isAuthenticated;
};

// Export default thằng Active Board Reducer
export default userSlice.reducer;
