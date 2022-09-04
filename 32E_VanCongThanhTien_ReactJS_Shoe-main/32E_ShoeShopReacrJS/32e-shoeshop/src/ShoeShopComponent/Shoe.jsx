import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    const { product, handleModal, handleCart } = this.props;
    // console.log(this.props);
    return (
      <div>
        <div className="card" key={product.id}>
          <img
            className="w-50 mx-auto"
            src={product.image}
            alt="..."
            onClick={() => {
              handleModal(product, true);
            }}
          />
          <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}$</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                handleCart(product);
              }}
            >
              <span>add to carts </span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
