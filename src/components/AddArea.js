import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {addAreaField} from "../actions/areas";

class addArea extends Component {
  state = {
    value: '',
    isAddButtonClicked: false
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleAddAreaField = () => {
    if (this.state.value.length === 0) return;
    this.props.addAreaField({name: this.state.value});
    this.setState({isAddButtonClicked: !this.state.isAddButtonClicked, value: ''})
  };

  handleAddButton = () => {
    this.setState({isAddButtonClicked: !this.state.isAddButtonClicked})
  };

  render() {
    return (
      <Fragment>
        {!this.state.isAddButtonClicked ?
          <i className="fas fa-plus-circle addButton" onClick={this.handleAddButton}/> :

          <div className="add-area">
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Area Name"/>
            <i className="fas fa-check" onClick={this.handleAddAreaField}/>
          </div>
        }
      </Fragment>
    );
  };
}

export default connect(null, {addAreaField})(addArea);