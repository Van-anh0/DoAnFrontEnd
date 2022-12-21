import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../actions/ApiCall/index";

// khởi tạo giá trị trong redux
const initialState = {
  currentOrder: null,
  //   isAuthenticated: false,
};

// Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng createAsyncThunk đi kèm với extraReducers
export const createOrderAPI = createAsyncThunk("order/create", async (data) => {
  const request = createOrder(data);
  return request.data;
});

// Khởi tạo một slice trong redux
export const orderSlice = createSlice({
  name: "order",
  initialState,
  // đồng bộ
  reducers: {
    // Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
  // Bất đồng bộ
  extraReducers: (builder) => {
    builder.addCase(createOrderAPI.fulfilled, (state, action) => {
      const order = action.payload;
      state.currentOrder = order;
      //   state.isAuthenticated = true;
    });
  },
});

// Actions: dành cho các components bên dưới gọi tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const { clearCurrentOrder } = orderSlice.actions;

// Selectors: mục đích là dành cho các components bên dưới gọi tới nó để lấy dữ liệu từ trong redux store ra sử dụng
export const selectCurrentUser = (state) => {
  return state.order.currentOrder;
};
// export const selectIsAuthenticated = (state) => {
//   return state.order.isAuthenticated;
// };

// Export default thằng Active Board Reducer
export default orderSlice.reducer;
