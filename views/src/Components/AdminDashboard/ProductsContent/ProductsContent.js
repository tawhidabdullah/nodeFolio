import React, { Component } from "react";
import "./ProductsContent.css";

class ProductsContent extends Component {
  state = {
    editProduct: false,
    title: "",
    desc: "",
    category: "",
    price: "",
    productImage: "",
    searchInput: ""
  };

  onMaterialButtonclick = () => {
    this.props.clicked();
  };

  onProductEdit(id, product) {
    this.setState({
      title: product.title,
      desc: product.desc,
      category: product.category,
      price: product.price,
      productImage: product.productImage,
      editProduct: true
    });
  }

  onSearchInputChange = e => {
    this.setState({
      searchInput: e.target.value.substr(0, 20)
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="header-wrapper">
            <div className="title">Welcome back, Tawhid Abdullah!</div>
            <div className="note">
              Recent: <span className="focus">$250 </span>to{" "}
              <span className="focus">Best Buy</span> on Saturday, June 5.
            </div>

            <span
              className="material-button"
              onClick={this.onMaterialButtonclick}
            >
              <i className="fa fa-plus" />
            </span>
          </div>
          <div className="content-wrapper">
            <div className="table-wrapper">
              <ul className="horizontal col header">
                <li className="content">Updated Date</li>
                <li className="content">Payee</li>
                <li className="content ">Description</li>
                <li className="content right">Remaining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsContent;
