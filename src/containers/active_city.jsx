import React from 'react';
import { connect } from "react-redux";

const ActiveCity = (props) => {
  if (!props.selectedCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.selectedCity.name}</h3>
      <p>{props.selectedCity.address}</p>
      <img src={url} width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);


