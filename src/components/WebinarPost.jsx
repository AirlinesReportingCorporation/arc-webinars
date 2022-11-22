import React, { Component } from "react";

class WebinarPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-lg-4">
          <div className="new-webinar">
            <div className="new-webinar-inner">
              <a href={this.props.link} className="webinar-image">
                <img
                  className="webinar-image-inner"
                  src={
                    "https://www2.arccorp.com/globalassets/homepage/redesign/webinar/" +
                    this.props.webinar +
                    ".jpg"
                  }
                  alt=""
                  lazy="loaded"
                />
              </a>
              <div className="webinar-tags">
                <p className="webinar-tags-inner">
                  <span className="tag">{this.props.tag}</span> <span className="date">{this.props.date}</span>
                </p>
              </div>
              <a href={this.props.link} className="webinar-title">
                {this.props.title}
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default WebinarPost;
