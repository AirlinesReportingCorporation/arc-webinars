import React, { Component } from "react";

class WebinarJumbo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="webinar-jumbo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="text-left webinar-jumbo-image"
                style={{
                  backgroundImage: "url(" + this.props.background + ")",
                  width: "100%",
                }}
              >
                <div>
                  <div className="webinar-jumbo-tag text-left">
                    <span>{this.props.tag}</span>
                  </div>
                  <div
                    className="webinar-jumbo-title text-left"
                    style={{
                      color: this.props.color ? this.props.color : "white",
                    }}
                  >
                    <a href={this.props.link}>{this.props.title}</a>
                  </div>
                  <div className="webinar-jumbo-desc text-left">
                    {this.props.description}
                  </div>
                  <a href={this.props.link} className="ctaBtn webinar-cta">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebinarJumbo;
