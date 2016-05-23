import React from "react";
import LoginBar from "./LoginBar";

export default class Head extends React.Component {
  render () {
    return (
      <div class="jumbotron text-center">
      <h1> YumSnap!</h1>
      <LoginBar />
      </div>
    );
  }
}
