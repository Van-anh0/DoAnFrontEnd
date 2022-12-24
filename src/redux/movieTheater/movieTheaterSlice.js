import { createSlice } from "@reduxjs/toolkit";

// khởi tạo giá trị trong redux
const initialState = {
  currentMovieTheater: null,
};

export const selectCurrentMovieTheater = (state) => {
  return state.movieTheater.currentMovieTheater;
};

// Khởi tạo một slice trong redux
export const movieTheaterSlice = createSlice({
  name: "movieTheater",
  initialState,
  // đồng bộ
  reducers: {
    // Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    clearCurrentMovieTheater: (state) => {
      state.currentMovieTheate = null;
    },
    actionUpdateMovieTheater: (state, action) => {
      let data = action.payload;
      state.currentMovieTheater = data;
    },
  },
});

// Actions: dành cho các components bên dưới gọi tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const { clearCurrentMovieTheate, actionUpdateMovieTheater } =
  movieTheaterSlice.actions;

// Export default thằng Reducer
export default movieTheaterSlice.reducer;
