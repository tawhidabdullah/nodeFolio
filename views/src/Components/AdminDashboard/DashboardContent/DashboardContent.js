import React, { Component } from "react";
import "./DashboardContent.css";

// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

const runtypwritter = () => {
  init();
};
// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

class DashboardContent extends Component {
  componentDidMount() {
    runtypwritter();
  }
  render() {
    return (
      <div className="dcontent">
        <button className="cv-btn">Download CV</button>
        <div class="containerBanner">
          <h1>
            I am
            <span
              class="txt-type"
              data-wait="3000"
              data-words='[" Tawhid Abdullah", " Programmer"]'
            />
          </h1>
        </div>
      </div>
    );
  }
}

export default DashboardContent;

/* 

    <div>
      <section class="main" id="banner">
        <div class="banner">
          
          <div class="container banner-inner">
            <div class="contant">
              <p class="top">Hi</p>
              <h2>
                I am <span>Tawhid Abdullah</span>
              </h2>
              {/* <p class="bottom">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                suscipit accusamus in optio! Assumenda{" "}
              </p> 
              </div>
              </div>
            </div>
          </section>
        </div>



*/
