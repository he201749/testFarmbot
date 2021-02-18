import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import '../css/form.css';
import { Farmbot } from "farmbot";
import axios from 'axios';

let bot = null
class Login extends React.Component {

  async verifRedirect() {
    let token = "";
    let email = "test@test.test";
    let password = "tttttttt";

    let res = await axios.post("http://10.0.0.1:3000/api/tokens", { user: { email, password } })
    bot =new Farmbot({ token: res.data.token.encoded });
    bot
    .connect()
    .then(function (bot) {
      console.log("Bot online!");
      return bot.moveRelative({ x: 100, y: 100, z: 0, speed: 100 });
    })
  }
  render() {
    return (
      <div className="form-style-5">
        <form>
          <fieldset>
            <legend><span className="number">1</span> Adresse email</legend>
            <input type="email" name="mail" placeholder="Your Email *"></input>
          </fieldset>
          <fieldset>
            <legend><span className="number">2</span> Mot de passe</legend>
            <input type="password" name="mdp" placeholder="Your Password *"></input>
          </fieldset>
          <input type="button" value="Connexion" onClick={this.verifRedirect} />
        </form>
      </div>
    )
  }
}

export default Login;