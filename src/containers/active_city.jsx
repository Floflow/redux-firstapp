import React from 'react';
import { connect } from "react-redux";

const ActiveCity = (props) => {
  return (
    <div className="active-city">
      <h3>{props.selectedCity ? props.selectedCity.name : ''}</h3>
      <p>{props.selectedCity ? props.selectedCity.address : ''}</p>
      <img src={props.selectedCity ? `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}` : '#'} alt="" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
