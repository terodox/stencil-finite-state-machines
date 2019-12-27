import { Component, Host, h } from '@stencil/core';
import '@material/mwc-textfield';
@Component({
  tag: 'app-login-form',
  styleUrl: 'login-form.css',
  shadow: true
})
export class LoginForm {

  render() {
    return (
      <Host>
        <mwc-textfield label='Username' required></mwc-textfield>
        <mwc-textfield type='password' label='Password' required></mwc-textfield>
      </Host>
    );
  }

}
