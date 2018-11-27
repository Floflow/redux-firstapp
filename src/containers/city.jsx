import React, { Component } from "react";


class City extends Component {
  render() {
    return(
      <div className="cities">{this.props.city.name}</div>
    );
  }
}

export default City;
