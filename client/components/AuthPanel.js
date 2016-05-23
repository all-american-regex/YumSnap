import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

export default class AuthPanel extends React.Component {
  handleAuth() {
    this.props.authToggle();
  }

  authStatus() {
    return this.props.auth ? "LOGOUT" : "LOGIN";
  }

  render() {
      const styles = {
        button: {
          margin: 12
        }
      };

    return (
        <RaisedButton onClick={this.handleAuth.bind(this)} label={this.authStatus()} default={true} style={styles.button} />
    );
  }
}
