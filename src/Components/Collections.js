import React, { Component } from "react";
import "./Styles/Collections.css";

class Collection extends Component {
  render() {
    const { collectionsData } = this.props;
    console.log(collectionsData);
    return (
      <div>
        <div className="collections-wrapper">
          <h1>Our Collections</h1>
          <hr
            style={{
              backgroundColor: "#ffbb58",
              width: "75px",
              height: "2px",
              border: "none",
              marginTop: "0px",
              marginLeft: "0px",
            }}
          />
        </div>
        <div className="cards-wrapper">
          {collectionsData &&
            collectionsData.map((item) => (
              <CollectionCard
                key={item.ID}
                url={item.PictureUrl}
                description={item.PlaceOption}
              />
            ))}
        </div>
      </div>
    );
  }
}

class CollectionCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="collection-card-wrapper">
        <div className="card-parent">
          <div
            className="card-child"
            style={{
              backgroundImage: url,
            }}
          >
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
