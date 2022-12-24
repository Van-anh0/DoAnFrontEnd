import { createSlice } from "@reduxjs/toolkit";

// khởi tạo giá trị trong redux
const initialState = {
  currentMovie: null,
};

export const selectCurrentMovie = (state) => {
  return state.movie.currentMovie;
};

// Khởi tạo một slice trong redux
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  // đồng bộ
  reducers: {
    // Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    clearCurrentMovie: (state) => {
      state.currentMovie = null;
    },
    actionUpdateMovie: (state, action) => {
      let data = action.payload;
      state.currentMovie = data;
    },
  },
});

// Actions: dành cho các components bên dưới gọi tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const { clearCurrentMovie, actionUpdateMovie } = movieSlice.actions;

// Export default thằng Reducer
export default movieSlice.reducer;
