import logo from './logo.svg';
import './App.css';

import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h1 className="text-center mb-5">React-Authentication</h1>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </AuthProvider>
  );
}

export default App;
