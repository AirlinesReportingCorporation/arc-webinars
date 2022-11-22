import React, { Component } from "react";

class YoutubeFeature extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feature-jumbo">
        <div
          className="text-left feature-jumbo-image"
          style={{
            backgroundImage: "url(" + this.props.background + ")",
            width: "100%",
          }}
        >
          <div className="container container-longer">
            <div className="row">
              <div className="col-lg-12 feature-container">
                <div>
                  <h2 className="feature-jumbo-title text-left">
                    <a href={this.props.link}>{this.props.title}</a>
                  </h2>
                  <div className="feature-jumbo-desc text-left">
                    {this.props.description}
                  </div>
                  <a href={this.props.link} className="ctaBtn feature-cta">
                    <i class="fab fa-youtube"></i> Subscribe
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

export default YoutubeFeature;
