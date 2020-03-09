import React, { Component } from 'react';
import './HistoryInfo.css';

class HistoryInfo extends Component {
  render() {
    return (
      <p className="history__inf">
        <i className="fas fa-user mr-1" />
        {this.props.content}
      </p>
    );
  }
}

export default HistoryInfo;