import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Authentication Activated!</h1>
        <p>Test 0.1.2</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
