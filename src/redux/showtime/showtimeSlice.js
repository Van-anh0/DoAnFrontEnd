import { createSlice } from "@reduxjs/toolkit";

// khởi tạo giá trị trong redux
const initialState = {
  currentShowtime: null,
};

export const selectCurrentShowtime = (state) => {
  return state.showtime.currentShowtime;
};

// Khởi tạo một slice trong redux
export const showtimeSlice = createSlice({
  name: "showtime",
  initialState,
  // đồng bộ
  reducers: {
    // Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    clearCurrentShowtime: (state) => {
      state.currentShowtime = null;
    },
    actionUpdateShowtime: (state, action) => {
      let data = action.payload;
      state.currentShowtime = data;
    },
  },
});

// Actions: dành cho các components bên dưới gọi tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const { clearCurrentShowtime, actionUpdateShowtime } =
  showtimeSlice.actions;

// Export default thằng Reducer
export default showtimeSlice.reducer;
