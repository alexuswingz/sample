import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%),
              url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://www.transparentpng.com/thumb/casino/red-dice-casino-chips-cards-transparent-background-UhzYR7.png') right bottom/contain no-repeat;
    opacity: 0.1;
    pointer-events: none;
  }
`;

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  border: 1px solid rgba(255, 215, 0, 0.2);
  position: relative;
  overflow: hidden;
  animation: cardGlow 3s infinite alternate;

  @keyframes cardGlow {
    from {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    }
    to {
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
    }
  }
`;

const Title = styled.h1`
  color: #ffd700;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px 12px 45px;
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Icon = styled.i`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffd700;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 15px;
  background: linear-gradient(135deg, #ffd700 0%, #ffb700 100%);
  border: none;
  border-radius: 10px;
  color: #1a1a2e;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &:hover::after {
    transform: rotate(45deg) translate(50%, 50%);
  }
`;

const ForgotPassword = styled.a`
  color: #ffd700;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    color: #ffed4a;
  }
`;

const DealerImage = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 600px;
  background: url('https://www.pngarts.com/files/3/Casino-Dealer-PNG-High-Quality-Image.png') right bottom/contain no-repeat;
  opacity: 0.9;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
    height: 450px;
    opacity: 0.5;
  }
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password });
  };

  return (
    <LoginContainer>
      <DealerImage />
      <LoginCard>
        <Title>FREEPLAY CASINO</Title>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Icon className="fas fa-user" />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Icon className="fas fa-lock" />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Button type="submit">Login</Button>
          <ForgotPassword href="#">Forgot Password?</ForgotPassword>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login; 