import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return [
      <div class='app-home'>
        <p>
          This is a simulated login page. It does not make any real calls to an API.
        </p>
        <p>
          However, it does offer you a set of controls to modify the state of the login page and observe the different states it can exist in.
        </p>
      </div>,
      <app-login-form></app-login-form>
    ];
  }
}
