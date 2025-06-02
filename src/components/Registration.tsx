import React, { useState } from 'react';
import styled from 'styled-components';

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

const BackToLoginButton = styled(Button)`
  background: transparent;
  border: 2px solid #ffd700;
  color: #ffd700;
  margin-top: 10px;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
  }
`;

interface RegistrationProps {
  onSwitchToLogin: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt with:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Format phone number as user types
    if (e.target.name === 'phoneNumber') {
      // Remove all non-numeric characters
      value = value.replace(/\D/g, '');
      
      // Format the number as (XXX) XXX-XXXX
      if (value.length <= 10) {
        if (value.length > 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length > 3) {
          value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 0) {
          value = `(${value}`;
        }
      } else {
        // Limit to 10 digits
        value = value.slice(0, 10);
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Icon className="fas fa-user" />
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Icon className="fas fa-envelope" />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Icon className="fas fa-phone" />
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          pattern="\(\d{3}\)\s\d{3}-\d{4}"
          title="Phone number format: (XXX) XXX-XXXX"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Icon className="fas fa-lock" />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Icon className="fas fa-lock" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </InputWrapper>
      <Button type="submit">Register</Button>
      <BackToLoginButton type="button" onClick={onSwitchToLogin}>
        Back to Login
      </BackToLoginButton>
    </Form>
  );
};

export default Registration; 