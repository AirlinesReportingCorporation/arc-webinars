import React, { Component } from "react";

class WebinarAlert extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="alert-row">
        <div className="webinar-alert">
          <div className="webinar-alert-inner">
            <a href="https://www.youtube.com/c/airlinesreportingcorporation">
              Stay up to date with the latest industry knowledge by subscribing
              to our YouTube channel. <span>Subscribe</span>{" "}
              <i class="fab fa-youtube"></i>
              <i style={{ fontSize: "10px" }} class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default WebinarAlert;
