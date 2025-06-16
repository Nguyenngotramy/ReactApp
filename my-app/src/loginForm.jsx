import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nGhi nhớ: ${rememberMe}`);
  };

  const formStyle = {
    maxWidth: 400,
    margin: '60px auto',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const labelStyle = {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: 6,
    marginTop: 16,
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: 6,
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
  };

  const checkboxContainerStyle = {
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px 0',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
    cursor: 'pointer',
    marginTop: 20,
    transition: 'background-color 0.3s ease',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: 20, color: '#007bff' }}>Đăng Nhập</h2>

      <label htmlFor="email" style={labelStyle}>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Nhập email"
        style={inputStyle}
      />

      <label htmlFor="password" style={labelStyle}>Mật khẩu:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        placeholder="Nhập mật khẩu"
        style={inputStyle}
      />

      <div style={checkboxContainerStyle}>
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Ghi nhớ tôi</label>
      </div>

      <button type="submit" style={buttonStyle}>
        Đăng nhập
      </button>
    </form>
  );
}

export default LoginForm;
