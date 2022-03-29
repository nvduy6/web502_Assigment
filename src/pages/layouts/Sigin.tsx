import React from 'react'
import { SubmitHandler,useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { signin } from '../../api/auth';
import { authenticated } from '../../utils/localStorage';
type TypeInputs = {
    name :string,
    email:string,
    password:string
}
const Signin = () => {
    const {register,handleSubmit,formState:{errors}}=useForm<TypeInputs>();
const navigate = useNavigate();
const onSubmit:SubmitHandler<TypeInputs>=async data=>{
    const {data:user} = await signin(data);
    authenticated(user,()=>{
        navigate("/")
    })
    
}
  return (
    <div><Form
    onSubmit ={handleSubmit(onSubmit)}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input {...register('email')} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password {...register('password')} />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form></div>
  )
}

export default Signin