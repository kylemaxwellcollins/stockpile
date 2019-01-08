import React, { Component } from "react";

export default class InventoryItemForm extends Component {
  constructor(props) {
    super(props);
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
        [e.target.id]: parseInt(e.target.value)
      });
  };

  onChecked = () => {
    this.setState(prevState => {
      return { sizesToggle: !prevState.sizesToggle };
    });
  };

  onSizeChange = e => {
    const quantity = e.target.value;
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
          [e.target.id]: parseInt(e.target.value)
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
        this.state.quantity !==
          (this.state.sizes.small +
            this.state.sizes.medium +
            this.state.sizes.large +
            this.state.sizes.extraLarge)
      ) {
        this.setState({
          error: "Make sure your sizes match your quantity"
        });
    } else {
      this.setState({
        error: ''
      })
      console.log(this.state.quantity);
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
