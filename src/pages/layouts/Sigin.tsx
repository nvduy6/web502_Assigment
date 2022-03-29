import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { signin } from '../../api/auth';
import { authenticated } from '../../utils/localStorage';
import Password from 'antd/lib/input/Password';
type TypeInputs = {
  name: string,
  email: string,
  password: string
}
const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeInputs> = async data => {
    const { data: user } = await signin(data);
    authenticated(user, () => {
      navigate("/")
    })

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signin