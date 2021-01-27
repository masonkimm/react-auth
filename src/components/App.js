import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h1 className="text-center mb-5">React-Authentication</h1>
          <Signup />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </AuthProvider>
  );
}

export default App;
