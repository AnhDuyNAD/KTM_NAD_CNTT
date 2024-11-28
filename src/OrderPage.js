import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // Hook để lấy giỏ hàng từ context

const OrderPage = () => {
  const { cart } = useCart(); // Lấy giỏ hàng từ CartContext
  const navigate = useNavigate(); // Hook điều hướng

  const handleGoToCart = () => {
    // Chuyển giỏ hàng sang CartPage qua state
    navigate("/cart", { state: { cartItems: cart } });
  };

  return (
    <div className="order-page">
      <h1>Thông tin đơn hàng</h1>

      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn hiện tại không có sản phẩm nào.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>Số lượng: {item.quantity}</p>
              <p>Giá: {item.price.toLocaleString()} VNĐ</p>
            </li>
          ))}
        </ul>
      )}

      <div className="order-summary">
        <p>
          <strong>
            Tổng tiền:{" "}
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toLocaleString()}{" "}
            VNĐ
          </strong>
        </p>

        {/* Điều hướng đến CartPage */}
        <button onClick={handleGoToCart}>Đi đến giỏ hàng</button>
      </div>
    </div>
  );
};

export default OrderPage;
