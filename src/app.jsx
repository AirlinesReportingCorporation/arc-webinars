import React, { Component } from "react";
import WebinarJumbo from "./components/WebinarJumbo";

class Webinars extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
          <WebinarJumbo background={"https://www2.arccorp.com/globalassets/homepage/redesign/slides/carousel15.jpg"} tag={"Fraud Webinar"} link={"https://www2.arccorp.com/support-training/fraud-prevention/archived-fraud-webinars/2021-archived-fraud/webinar-091621/"} title={"An Analytical View on 100 Billion Transactions by Worldpay/FIS"} description={"Watch this information session where Tony Ashe from WorldPay will take you through trends and provide insight into global markets"}/>
      </>
    );
  }
}

export default Webinars;
