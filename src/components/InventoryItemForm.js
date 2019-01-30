import React, { Component } from "react";
import moment from "moment";

export default class InventoryItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizesToggle:
        (props.inventoryItem &&
          (props.inventoryItem.sizes.small ||
            props.inventoryItem.sizes.medium ||
            props.inventoryItem.sizes.large ||
            props.inventoryItem.sizes.extraLarge)) > 0
          ? true
          : false,
      product: props.inventoryItem ? props.inventoryItem.product : "",
      cost: props.inventoryItem
        ? (props.inventoryItem.cost / 100).toFixed(2)
        : "",
      description: props.inventoryItem ? props.inventoryItem.description : "",
      quantity: props.inventoryItem ? props.inventoryItem.quantity : "",
      sizes: {
        small: props.inventoryItem ? props.inventoryItem.sizes.small : "",
        medium: props.inventoryItem ? props.inventoryItem.sizes.medium : "",
        large: props.inventoryItem ? props.inventoryItem.sizes.large : "",
        extraLarge: props.inventoryItem
          ? props.inventoryItem.sizes.extraLarge
          : ""
      },
      image: null,
      imageURL: "",
      createdAt: props.inventoryItem
        ? moment(props.inventoryItem.createdAt)
        : moment(),
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
    const getTotalSizes = () => {
      if (this.state.sizesToggle) {
        const totalSizes = Object.values(this.state.sizes)
          .filter(Number)
          .reduce((a, b) => {
            return parseInt(a) + parseInt(b);
          });
        return totalSizes;
      } else {
        return Number(this.state.quantity);
      }
    };
    if (
      !this.state.product ||
      !this.state.cost ||
      (this.state.sizesToggle ? false : !this.state.quantity)
    ) {
      this.setState({
        error: "Please provide the product name, cost and quantity"
      });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        product: this.state.product,
        cost: parseFloat(this.state.cost, 10) * 100,
        description: this.state.description,
        quantity: getTotalSizes(),
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

  onFileChange = e => {
    const image = e.target.files[0];
    if (image) {
      this.setState({ image });
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
      onFileChange,
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
          {state.sizesToggle || (
            <input
              type="text"
              placeholder="Quantity"
              id="quantity"
              value={state.quantity}
              onChange={onQuantityChange}
            />
          )}
          <label htmlFor="sizeToggle">Add sizes</label>
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
          <label htmlFor="image">Upload image</label>
          <input
            type="file"
            id="image"
            onChange={onFileChange}
            accept="image/*"
          />
          <textarea
            placeholder="Description"
            id="description"
            value={state.description}
            onChange={onTextChange}
          />
          <button>{this.props.inventoryItem ? "Make Changes" : "Add"}</button>
        </form>
      </div>
    );
  }
}
