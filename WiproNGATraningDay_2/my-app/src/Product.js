import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor of Product has been called");
    this.state = {
      productId: null,
      price: 0,
      isCartVisible: true,
    };
  }

  componentDidMount() {
    console.log("componentDidMount of Product called");
  }

  handleAddToCart = (productId) => {
    this.setState((prevState) => ({
      productId,
      price: prevState.price + 10,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.price !== this.state.price) {
      console.log("componentDidUpdate: Product price updated");
    }
  }

  handleRemoveCart = () => {
    console.log("Cart removed");
    this.setState({ isCartVisible: false });
  };

  render() {
    console.log("Render of Product called");
    return (
      <div>
        <h2>Product</h2>
        <b> PRICE: {this.state.price} </b>
        <br />
        <button onClick={() => this.handleAddToCart(1)}> Add Product 1</button>
        <button onClick={() => this.handleAddToCart(2)}> Add Product 2</button>
        <button onClick={() => this.handleAddToCart(3)}> Add Product 3</button>

        {this.state.isCartVisible ? (
          <>
            <Cart2 productId={this.state.productId} price={this.state.price} />
            <br />
            <button onClick={this.handleRemoveCart}> Remove Cart </button>
          </>
        ) : (
          <h2>Cart has been removed</h2>
        )}
      </div>
    );
  }
}

class Cart2 extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor of Cart called");
    this.state = {
      count: 0,
      price: props.price,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps called");
    if (nextProps.price !== prevState.price) {
      console.log("Price updated in Cart2");
      return { price: nextProps.price };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.price !== nextProps.price || this.state.count !== nextState.count) {
      console.log("shouldComponentUpdate: Cart re-rendering");
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      console.log(`Cart updated: Product ID changed to ${this.props.productId}`);
    }
  }

  componentDidMount() {
    console.log("componentDidMount of Cart called");
  }

  componentWillUnmount() {
    console.log("Cart has been removed from the UI");
  }

  handleUpdateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 10 }));
  };

  render() {
    console.log("Render of Cart called");
    return (
      <>
        <h1>Cart</h1>
        <b> Count: {this.state.count} </b>
        <br />
        <button onClick={this.handleUpdateCount}> Update Quantity </button>
      </>
    );
  }
}
