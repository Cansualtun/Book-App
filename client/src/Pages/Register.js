import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logo, FormRow } from '../components';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { registerUser, loginUser } from '../features/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'submit'}
        </button>
        {/* <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
        >
          {isLoading ? 'Loading...' : 'demo app'}
        </button> */}
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
