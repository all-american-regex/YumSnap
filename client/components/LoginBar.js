import React from "react";

export default class LoginBar extends React.Component{
  render () {
    return (
      <div>
        <a href="/signup" class="btn btn-social  btn-vk"><span class="fa fa-user"></span> Signup</a>
        <a href="/login" class="btn btn-social  btn-vk"><span class="fa fa-fw fa-sign-in"></span> Login</a>
        <div className="superbutton">
          <a href="/auth/github" class="btn btn-social-icon  btn-github"><span class="fa fa-github"></span></a>
          <a href="/auth/google" class="btn btn-social-icon  btn-google"><span class="fa fa-google"></span></a>
          <a href="/auth/twitter" class="btn btn-social-icon  btn-twitter"><span class="fa fa-twitter"></span></a>
        </div>
      </div>
    );
  }
}
