import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class City extends Component {
  render() {
    return(
      <div className="list-group-item">
        {this.props.city.name}
      </div>
    );
  }
}

export default City;


