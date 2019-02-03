import React, { Component, Fragment } from "react";
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
      title: props.inventoryItem ? props.inventoryItem.title : "",
      price: props.inventoryItem
        ? (props.inventoryItem.price / 100).toFixed(2)
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
    console.log(props.inventoryItem)
  }

  onTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onPriceChange = e => {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        price
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
      !this.state.title ||
      !this.state.price ||
      (this.state.sizesToggle ? false : !this.state.quantity)
    ) {
      this.setState({
        error: "Please provide the title, price and quantity"
      });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        price: parseFloat(this.state.price, 10) * 100,
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
      onPriceChange,
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
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={state.title}
            onChange={onTextChange}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            placeholder="Price"
            id="price"
            value={state.price}
            onChange={onPriceChange}
          />
          <label htmlFor="sizeToggle">Add sizes</label>
          <input
            type="checkbox"
            name="sizeToggle"
            id="sizeToggle"
            onChange={onChecked}
            checked={this.state.sizesToggle}
          />
          {state.sizesToggle || (
            <Fragment>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="text"
                placeholder="Quantity"
                id="quantity"
                value={state.quantity}
                onChange={onQuantityChange}
              />
            </Fragment>
          )}

          {state.sizesToggle && (
            <div>
              <label htmlFor="small">S:</label>
              <input
                type="text"
                placeholder="Small"
                id="small"
                value={state.sizes.small}
                onChange={onSizeChange}
              />
              <label htmlFor="medium">M:</label>
              <input
                type="text"
                placeholder="Medium"
                id="medium"
                value={state.sizes.medium}
                onChange={onSizeChange}
              />
              <label htmlFor="large">L:</label>
              <input
                type="text"
                placeholder="Large"
                id="large"
                value={state.sizes.large}
                onChange={onSizeChange}
              />
              <label htmlFor="extraLarge">XL:</label>
              <input
                type="text"
                placeholder="Extra Large"
                id="extraLarge"
                value={state.sizes.extraLarge}
                onChange={onSizeChange}
              />
            </div>
          )}
          <label htmlFor="description">Description:</label>
          <textarea
            placeholder="Description"
            id="description"
            value={state.description}
            onChange={onTextChange}
          />
          <label htmlFor="image">Upload image</label>
          <input
            type="file"
            id="image"
            onChange={onFileChange}
            accept="image/*"
          />
          <button>{this.props.inventoryItem ? "Save" : "Add"}</button>
        </form>
      </div>
    );
  }
}
