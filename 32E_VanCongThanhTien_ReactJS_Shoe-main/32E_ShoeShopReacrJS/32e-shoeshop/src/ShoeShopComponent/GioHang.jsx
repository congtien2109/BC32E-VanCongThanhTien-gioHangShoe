import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { cart, handleRemoveCart, handleQuantity } = this.props;

    const renderCart = () => {
      return cart.map((item, idx) => {
        return (
          <tr key={idx}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <img style={{ width: "80px" }} src={item.image} alt="..." />
            </td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => handleQuantity(item.id, 1)}
              >
                +
              </button>
              <span className="mx-2">{item.soLuong}</span>
              <button
                className="btn btn-danger"
                onClick={() => handleQuantity(item.id, -1)}
              >
                -
              </button>
            </td>
            <td>{(item.price * item.soLuong).toLocaleString()}$</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveCart(item.id)}
              >
                X
              </button>
            </td>
          </tr>
        );
      });
    };

    return (
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: "20px" }}
          ></i>
          <span>
            ({cart.length} - {``}
            {cart
              .reduce((total, item) => {
                return (total += item.soLuong * item.price);
              }, 0)
              .toLocaleString()}
            $)
          </span>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Tên SP</th>
                      <th>Hình Ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                    </tr>
                  </thead>
                  <tbody>{renderCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
