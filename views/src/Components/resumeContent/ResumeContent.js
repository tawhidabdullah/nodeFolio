import React, { Component } from "react";
import "./ResumeContent.css";

export default class ResumeContent extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
