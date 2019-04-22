import React from "react";
import "./DashboardContent.css";

const DashboardContent = () => {
  return (
    <div>
      <section class="main" id="banner">
        <div class="banner">
          <button className='cv-btn'>Download CV</button>
          <div class="container banner-inner">
            <div class="contant">
              <p class="top">Hi</p>
              <h2>
                I am <span>Tawhid Abdullah</span>
              </h2>
              {/* <p class="bottom">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                suscipit accusamus in optio! Assumenda{" "}
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;
