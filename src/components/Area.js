import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {editAreaField, deleteAreaField} from "../actions/areas";

class Area extends Component {

  state = {
    isEditing: false,
    isDeleting: false,
    name: this.props.name,
    t: null
  };

  setTimer = () => {
    this.setState({
      t: setTimeout(function () {
        this.setState({isDeleting: false});
        this.props.deleteAreaField(this.props.id);
      }.bind(this), 3000)
    })
  };

  deleteTimer() {
    clearTimeout(this.state.t);
    this.setState({isDeleting: false});
  };

  render() {
    return (
      <div className="area">
        {
          this.state.isEditing ?
            <Fragment>
              <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} placeholder="Area Name"/>
              <i className="fas fa-check" onClick={() => {
                this.props.editAreaField({name: this.state.name, id: this.props.id}, this.props.id);
                this.setState({isEditing: !this.state.isEditing})
              }}/>
            </Fragment> :

            this.state.isDeleting ?
              <i className="fas fa-undo" onClick={() => {this.deleteTimer()}}/> :

            <Fragment>
              <span>{this.props.name}</span>
              <div>
                <i className="fas fa-pencil-alt" onClick={() => {
                  this.setState({isEditing: !this.state.isEditing})
                }}/>
                <i className="fas fa-trash-alt" onClick={() => {this.setState({isDeleting: !this.state.isDeleting}); this.setTimer()}}/>
              </div>
            </Fragment>
        }
      </div>
    )
  }
}

export default connect(null, {editAreaField, deleteAreaField})(Area);