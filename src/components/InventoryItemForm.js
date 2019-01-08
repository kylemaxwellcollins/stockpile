import React, { Component } from "react";
import moment from "moment";

export default class InventoryItemForm extends Component {
  constructor(props) {
    super(props);

    // todo refactor for editInventory
    this.state = {
      sizesToggle: false,
      product: "",
      cost: "",
      description: "",
      quantity: "",
      sizes: {
        small: "",
        medium: "",
        large: "",
        extraLarge: ""
      },
      image: "",
      createdAt: moment(),
      error: ""
    };
  }

  onTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onCostChange = e => {
    const cost = e.target.value;
    if (!cost || cost.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        cost
      });
    }
  };

  onQuantityChange = e => {
    const quantity = e.target.value;
    if (!quantity || quantity.match(/^\d{1,}?$/))
      this.setState({
        [e.target.id]: quantity
      });
  };

  onChecked = () => {
    this.setState(prevState => {
      return { sizesToggle: !prevState.sizesToggle };
    });
  };

  onSizeChange = e => {
    const quantity = e.target.value;
    // !shows NaN when input is blank -- fix
    if (!this.state.sizes[quantity]) {
      this.setState({
        sizes: {
          ...this.state.sizes,
          [e.target.id]: ""
        }
      });
    }
    if (!quantity || quantity.match(/^\d{1,}?$/))
      this.setState({
        sizes: {
          ...this.state.sizes,
          [e.target.id]: quantity
        }
      });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.product || !this.state.cost || !this.state.quantity) {
      this.setState({
        error: "Please provide the product name, cost and quantity"
      });
    } else if (
      this.state.sizesToggle &&
      parseInt(this.state.quantity) !==
        parseInt(this.state.sizes.small) +
          parseInt(this.state.sizes.medium) +
          parseInt(this.state.sizes.large) +
          parseInt(this.state.sizes.extraLarge)
    ) {
      this.setState({
        error:
          "Make sure the quantities for each size add up to the total quantity"
      });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        product: this.state.product,
        cost: parseFloat(this.state.cost, 10) * 100,
        description: this.state.description,
        quantity: this.state.quantity,
        sizes: {
          small: this.state.sizes.small,
          medium: this.state.sizes.medium,
          large: this.state.sizes.large,
          extraLarge: this.state.sizes.extraLarge
        },
        image: this.state.image,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    const {
      onSubmit,
      onTextChange,
      onCostChange,
      onQuantityChange,
      onChecked,
      onSizeChange,
      state
    } = this;
    return (
      <div>
        {state.error && <p>{state.error}</p>}
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Product"
            id="product"
            value={state.product}
            onChange={onTextChange}
          />
          <input
            type="text"
            placeholder="Cost"
            id="cost"
            value={state.cost}
            onChange={onCostChange}
          />
          <input
            type="text"
            placeholder="Quantity"
            id="quantity"
            value={state.quantity}
            onChange={onQuantityChange}
          />
          <label htmlFor="sizeToggle">Show sizes</label>
          <input
            type="checkbox"
            name="sizeToggle"
            id="sizeToggle"
            onChange={onChecked}
            checked={this.state.sizesToggle}
          />

          {state.sizesToggle && (
            <div>
              <input
                type="text"
                placeholder="Small"
                id="small"
                value={state.sizes.small}
                onChange={onSizeChange}
              />
              <input
                type="text"
                placeholder="Medium"
                id="medium"
                value={state.sizes.medium}
                onChange={onSizeChange}
              />
              <input
                type="text"
                placeholder="Large"
                id="large"
                value={state.sizes.large}
                onChange={onSizeChange}
              />
              <input
                type="text"
                placeholder="Extra Large"
                id="extraLarge"
                value={state.sizes.extraLarge}
                onChange={onSizeChange}
              />
            </div>
          )}
          <input
            type="text"
            placeholder="Image"
            id="image"
            value={state.image}
            onChange={onTextChange}
          />
          <textarea
            placeholder="Description"
            id="description"
            value={state.description}
            onChange={onTextChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
