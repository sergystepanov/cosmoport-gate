import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

import Api from '../../lib/core-api-client/ApiV1';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: null,
      api: null
    };

    // After config recieving we should fetch the data and render markup.
    ipcRenderer.on('config', this.handleConfig);
  }

  handleConfig = (event, data) => {
    this.setState({ config: data, api: new Api(`http://${data.address.server}`) });
  }

  render() {
    if (this.state.config === null) {
      return <div>Loading...</div>;
    }

    const el = React.cloneElement(
      this.props.children,
      {
        config: this.state.config,
        api: this.state.api
      }
    );

    return (<div>
      {el}
    </div>);
  }
}
