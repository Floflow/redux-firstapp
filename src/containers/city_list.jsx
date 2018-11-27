import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from '../containers/city';

import { setCities } from '../actions';

class CityList extends Component {


  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return(
      <div className="list-group-item ">
        {
          this.props.cities.map((city)=>{
            return (
              <City
                city={city}
                key={city.slug}
              />
            )
          })
        }
      </div>
    );
  }
}

export default CityList;

