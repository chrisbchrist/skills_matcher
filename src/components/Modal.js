import React, { Component } from "react";

export default class Modal extends Component {
    onClose = (e) => {
      if(e.target === e.currentTarget) {
        this.props.onClose && this.props.onClose(e);
     }
    };
  
    render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <div className="custom-modal" id="modal">
          <div className="window" style={{ maxWidth: this.props.customWidth && this.props.customWidth }}>
            <div class="modal-close" onClick={this.props.onClose}>X</div>
              {this.props.children}
          </div>
        </div>
      );
    }
  }