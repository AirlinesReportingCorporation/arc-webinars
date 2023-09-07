import React, { Component } from "react";
import WebinarJumbo from "./components/WebinarJumbo";
import WebinarAlert from "./components/WebinarAlert";
import WebinarPost from "./components/WebinarPost";
import YoutubeFeature from "./components/YoutubeFeature";

class Webinars extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      curIndex: 6,
      prevIndex: 0,
      maxPosts: 0,
    };
  }

  componentDidMount() {
    this.getPosts(this.state.prevIndex, this.state.curIndex);
  }

  getPosts = (startIndex, endIndex) => {
    var postArray = document.querySelectorAll(
      ".content-block--pageItem__inside"
    );
    console.log(postArray.length);
    this.setState({ maxPosts: postArray.length });

    let i = startIndex;
    console.log(i);
    while (i < endIndex && i < postArray.length) {
      const post = postArray[i];
      var tempPosts = this.state.posts;
      tempPosts.push({
        link: post.querySelector(".ctaLink").getAttribute("href"),
        title: post.querySelector(".ctaLink").getAttribute("title"),
        tag: post.querySelector(".content-block--pageItem__metadata")
          .lastElementChild.innerHTML,
        date: post.querySelector(".content-block--pageItem__metadata")
          .firstElementChild.innerHTML,
        webinar:
          post.querySelector(".ctaLink").getAttribute("href").split("/")[4] ==
          ""
            ? post.querySelector(".ctaLink").getAttribute("href").split("/")[3]
            : post.querySelector(".ctaLink").getAttribute("href").split("/")[4],
      });
      i++;
    }
    this.setState({ posts: tempPosts });
    // We return the next 6 items -- the first time running will be 0 - 5th index
  };

  showMore = () => {
    console.log(this.state.tempPosts);
    var tempIndex = this.state.curIndex;
    this.setState({ prevIndex: tempIndex, curIndex: (tempIndex += 6) }, () => {
      this.getPosts(this.state.prevIndex, this.state.curIndex);
    });
    console.log("show more with no filter");
    console.log("click");
  };

  render() {
    console.log(this.state.maxPosts);
    console.log(this.state.tempPosts == this.state.maxPosts);
    return (
      <div>
        <WebinarAlert />
        <WebinarJumbo
            tag={"Webinar"}
            background={"https://www2.arccorp.com/globalassets/homepage/redesign/webinar/header.png"}
            link={
              "https://www2.arccorp.com/articles-trends/on-demand-webinars/webinar-list/webinar-083123/"
            }
            title={
              "Navigating NDC and ARC Direct Connect: A Roadmap to Innovation"
            }
            description={
              "Were you unable to New Distribution Capability (NDC) is growing here in the U.S. Watch this webinar to learn about NDC’s history as an enhanced distribution option, the driving forces behind it and how ARC supports travel innovation through our Direct Connect program.attend ARC Payments Forum 2023 or want to revisit the information? You're in luck! We have the info you're looking for."
            }
          />
        <div className="container">
          
          <div className="row">
            <div className="col-lg-12 webinar-header">
              <h2 className="text-left webinar-header-inner">
                Latest Webinars
              </h2>
            </div>
          </div>
          <div className="row">
            {this.state.posts.map((post) => (
              <WebinarPost
                title={post.title}
                link={post.link}
                tag={post.tag}
                date={post.date}
                webinar={post.webinar}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 webinar-btn">
              <div
                className="ctaBtn"
                style={{
                  display:
                    this.state.posts.length == this.state.maxPosts
                      ? "none"
                      : "inline-block",
                  width: "220px",
                  cursor: "pointer",
                }}
                onClick={this.showMore}
              >
                View More
              </div>
            </div>
          </div>
          <YoutubeFeature
            background="https://www2.arccorp.com/globalassets/homepage/redesign/webinar/webinar-footer-image.jpg"
            description="Subscribe to our YouTube channel."
            title="Stay Up to Date with the Latest Industry Knowledge."
          />
        </div>
      </div>
    );
  }
}

export default Webinars;
