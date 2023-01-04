import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { orderApi } from "actions/index";

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
    const request = orderApi.createOrder(data);
    return request.data;
  }
);

function calculateOrder(order) {
  let total = 0;
  order.show_seat.forEach((e) => {
    total += e.price;
  });
  order.order_item.forEach((e) => {
    total += e.price * e.quantity;
  });

  order.total = total;
  return order;
}

function addOrderItem(order, product) {
  let index = order.order_item.findIndex(
    (el) => el.product_id === product.product_id
  );
  if (index != -1) {
    order.order_item[index].quantity += 1;
  } else {
    product.quantity = 1;
    order.order_item.push(product);
  }
  return order;
}

function removeOrderItem(order, product) {
  let index = order.order_item.findIndex(
    (el) => el.product_id === product.product_id
  );
  if (index != -1) {
    if (order.order_item[index].quantity > 1) {
      order.order_item[index].quantity -= 1;
    } else {
      order.order_item.splice(index, 1);
    }
  }
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
        movie_name: data.movie_name,
        movie_image: data.movie_image,

        show_seat: [],
        order_item: [],

        cinema_name: data.cinema_name,
        room_name: data.room_name, // todo
        room_id: data.room_id,

        showtime_id: data.showtime_id,
        showtime: data.showtime,

        user_id: data.user_id,
        payment_method: "CASH",
        status: "booked", // đã đặt, chưa nhận vé
      };
    },
    addSeat: (state, action) => {
      const data = {
        seat_id: action.payload.id,
        price: action.payload.price,
        seat_name: action.payload.name,
        showtime_id: state.currentOrder.showtime_id,
        row: action.payload.row,
        col: action.payload.col,
      };
      state.currentOrder.show_seat.unshift(data);
      state.currentOrder = calculateOrder(state.currentOrder);
    },
    removeSeat: (state, action) => {
      let seatId = action.payload.id;
      let show_seat = state.currentOrder.show_seat;
      state.currentOrder.show_seat = show_seat.filter(
        (show_seat) => show_seat.seat_id !== seatId
      );
      state.currentOrder = calculateOrder(state.currentOrder);
    },
    addProduct: (state, action) => {
      const data = {
        product_id: action.payload.id,
        price: action.payload.price,
        product_name: action.payload.name,
      };
      state.currentOrder = addOrderItem(state.currentOrder, data);
      state.currentOrder = calculateOrder(state.currentOrder);
    },
    removeProduct: (state, action) => {
      const data = {
        product_id: action.payload.id,
        price: action.payload.price,
        product_name: action.payload.name,
        quantity: action.payload.quantity,
      };
      state.currentOrder = removeOrderItem(state.currentOrder, data);
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
export const {
  clearCurrentOrder,
  initOrder,
  addSeat,
  removeSeat,
  addProduct,
  removeProduct,
} = orderSlice.actions;

// export const selectIsAuthenticated = (state) => {
//   return state.order.isAuthenticated;
// };

// Export default thằng Active Board Reducer
export default orderSlice.reducer;
