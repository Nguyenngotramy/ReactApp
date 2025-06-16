import React from 'react';
import './App.css';
import LoginForm from './loginForm';

function App() {
  return (
    <div className="App" style={styles.container}>
      <LoginForm />
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  }
};

export default App;
