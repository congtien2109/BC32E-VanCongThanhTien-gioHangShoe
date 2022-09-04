import React, { Component } from "react";

export default class ModalShoe extends Component {
  render() {
    const { shoe, show, handleModal } = this.props;
    // console.log("shoe", shoe);
    return (
      <div>
        <div
          className="modal"
          tabindex="-1"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chi tiết sản phẩm</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    handleModal(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <img className="w-100" src={shoe.image} alt="..." />
                  </div>
                  <div className="col-8">
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>Name :</td>
                          <td>{shoe.name}</td>
                        </tr>
                        <tr>
                          <td>Alias :</td>
                          <td>{shoe.alias}</td>
                        </tr>
                        <tr>
                          <td>Price :</td>
                          <td>{shoe.price}$</td>
                        </tr>
                        <tr>
                          <td>Description:</td>
                          <td>{shoe.description}</td>
                        </tr>
                        <tr>
                          <td>Quantity:</td>
                          <td>{shoe.quantity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    handleModal(false);
                  }}
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
