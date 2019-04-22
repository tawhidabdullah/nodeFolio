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
            <div className="title">Some recent, Projects!</div>
            <div class="produc-wrap ">
              <div class="search">
                <input
                  onChange={this.onSearchInputChange}
                  value={this.state.searchInput}
                  type="text"
                  class="searchTerm searchTerm__red"
                  placeholder="Search products by name.."
                />
                <button type="submit" class="searchButton searchButton__red">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div class="blog-slider">
              <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                    <img src="../../../assets/imgs/sharpstore1.PNG" alt="" />
                  </div>
                  <div class="blog-slider__content">
                    <span class="blog-slider__code">26 December 2019</span>
                    <div class="blog-slider__title">Sharp Store</div>
                    <div class="blog-slider__text">
                      A online store for all kind of products with easy to use
                      dashboard{" "}
                    </div>
                    <a
                      href="https://young-everglades-31692.herokuapp.com/products"
                      class="blog-slider__button"
                    >
                      PREVIEW
                    </a>
                    <a
                      href="https://github.com/tawhidabdullah/sharpStore"
                      class="blog-slider__button blog-slider__button-code"
                    >
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-slider">
              <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide">
                  <div class="blog-slider__img">
                    <img src="../../../assets/imgs/sharpstore1.PNG" alt="" />
                  </div>
                  <div class="blog-slider__content">
                    <span class="blog-slider__code">26 December 2019</span>
                    <div class="blog-slider__title">Sharp Store</div>
                    <div class="blog-slider__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?{" "}
                    </div>
                    <a href="#" class="blog-slider__button">
                      PREVIEW
                    </a>
                    <a
                      href="#"
                      class="blog-slider__button blog-slider__button-code"
                    >
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsContent;

/*

<div className="table-wrapper">
              <ul className="horizontal col header">
                <li className="content">Updated Date</li>
                <li className="content">Payee</li>
                <li className="content ">Description</li>
                <li className="content right">Remaining</li>
              </ul>
            </div>



*/
