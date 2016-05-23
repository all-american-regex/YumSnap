import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

export default class Login extends React.Component {
render () {
    return (
      <div class="container">
        <div class="loginbox">
          <h1>Log In</h1>
          <form class="inputdata" name="signinForm" action="/login" method="post">
            <p><input type="text" name="username" placeholder="username" /> </p>
            <p><input type="password" name="password" placeholder="password" /> </p>
            <p><button class="btn btn-sm btn-social btn-vk"><span class="fa fa-fw fa-sign-in"></span> Login</button></p>
          </form>
        </div>
      </div>
   );
  }
}
