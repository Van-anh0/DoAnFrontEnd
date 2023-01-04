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

function ModalProduct() {
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
    <div className="product">
      {listProduct?.data?.map((product) => (
        <div key={product.id} className="product_item">
          <div>ten: {product.name}</div>
          <div>
            {product.price} / {product.uom}
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
    </div>
  );
}

export default ModalProduct;
