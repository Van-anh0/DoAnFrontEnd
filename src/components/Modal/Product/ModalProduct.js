import productApi from "actions/productApi/productApi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentProduct,
  actionUpdateProduct,
} from "redux/product/productSlice";
import {
  addProduct,
  selectCurrentorder,
  removeProduct,
} from "redux/order/orderSlice";
import "./ModalProduct.scss";

function ModalProduct({ handleShowModalProduct }) {
  const listProduct = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();

  const order = useSelector(selectCurrentorder);
  const [orderItem, setOrderItem] = useState({});

  useEffect(() => {
    productApi.getListProduct().then((result) => {
      dispatch(actionUpdateProduct(result));
    });
  }, []);

  useEffect(() => {
    let data = {};
    order?.order_item?.forEach((item) => {
      data[item.product_id] = item;
    });
    setOrderItem(data);
  }, [order]);

  function handleRemoveProduct(product) {
    dispatch(removeProduct(product));
  }

  function handleAddProduct(product) {
    dispatch(addProduct(product));
  }

  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_close" onClick={() => handleShowModalProduct()}>
          X
        </div>

        <div className="combo">
          <h1>Combo</h1>
          {listProduct?.data?.map((product) => (
            <div key={product.id} className="product_item">
              <div>Tên sản phẩm: {product.name}</div>
              <div>
                Giá: {product.price}đ / {product.uom}
              </div>
              <button
                onClick={() => {
                  handleRemoveProduct(product);
                }}
              >
                -
              </button>
              <input value={orderItem[product.id]?.quantity || 0}></input>
              <button
                onClick={() => {
                  handleAddProduct(product);
                }}
              >
                +
              </button>
            </div>
          ))}
          <button className="bt_close" onClick={() => handleShowModalProduct()}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
