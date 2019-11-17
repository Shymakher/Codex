import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddArea from './AddArea';

import '../scss/AreaList.scss';
import Area from "./Area";

class AreaList extends Component {

  renderAreas() {
    return this.props.areas.areas.map((el, i) => {
      return <Area name={el.name} key={i} id={el.id}/>
    })
  }

  render() {
    return (
      <div className="area-list-wrap">
        <div className="area-list">
          {this.renderAreas()}
          <AddArea/>
        </div>
      </div>
    )
  }
}

const mapStateOfProps = ({areas}) => ({
  areas
});

export default connect(mapStateOfProps, null)(AreaList);