import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "actions/ApiCall/index";
import { trimDate, trimTime } from "utils/common";

// khởi tạo giá trị trong redux
const initialState = {
  currentOrder: null,
  //   isAuthenticated: false,
};

// Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng createAsyncThunk đi kèm với extraReducers
// path order/orderSlice la duong dan toi chinh no
export const createOrderAPI = createAsyncThunk(
  "order/orderSlice",
  async (data) => {
    const request = createOrder(data);
    return request.data;
  }
);

function calculateOrder(order) {
  let total_price = 0;
  let quantity = 0;
  order.ticket.forEach((e) => {
    total_price += e.price;
    quantity += 1;
  });

  order.total_price = total_price;
  order.quantity = quantity;
  order.price = 45000;
  return order;
}

export const selectCurrentorder = (state) => {
  return state.order.currentOrder;
};

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
    initOrder: (state, action) => {
      const data = action.payload;
      state.currentOrder = {
        movie_id: data.movie_id,
        showtime_id: data.showtime_id,
        ticket: [],
        movie_name: data.movie_name,
        poster: data.poster,
        movie_theater_name: data.movie_theater_name,
        day: trimDate(data.day),
        start_time: trimTime(data.start_time),
        user_id: "b5ea8f1a-8eb1-461d-a1ff-ed0d2a796cb9",
        payment_method: "momo",
        status: "chwa dung cai nay",
      };
    },
    addSeat: (state, action) => {
      const data = {
        seat_id: action.payload.id,
        price: action.payload.price,
        seat_name: action.payload.name,
        showtime_id: state.currentOrder.showtime_id,
      };
      state.currentOrder.ticket.unshift(data);
      state.currentOrder = calculateOrder(state.currentOrder);
    },
    removeSeat: (state, action) => {
      let seatId = action.payload.id;
      let ticket = state.currentOrder.ticket;
      state.currentOrder.ticket = ticket.filter(
        (ticket) => ticket.seat_id !== seatId
      );
      state.currentOrder = calculateOrder(state.currentOrder);
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
export const { clearCurrentOrder, initOrder, addSeat, removeSeat } =
  orderSlice.actions;

// Selectors: mục đích là dành cho các components bên dưới gọi tới nó để lấy dữ liệu từ trong redux store ra sử dụng
export const selectCurrentUser = (state) => {
  return state.order.currentOrder;
};
// export const selectIsAuthenticated = (state) => {
//   return state.order.isAuthenticated;
// };

// Export default thằng Active Board Reducer
export default orderSlice.reducer;
