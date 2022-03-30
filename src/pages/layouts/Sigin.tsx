import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate ,Link} from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { signin } from '../../api/auth';
import { authenticated } from '../../utils/localStorage';
import Password from 'antd/lib/input/Password';
type TypeInputs = {
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
    <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex={-1} role="dialog" id="modalSignin">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded-5 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        {/* <h5 class="modal-title">Modal title</h5> */}
        <h2 className="fw-bold mb-0">Sign up for free</h2>
        <Link to='/'> <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></Link>
       
      </div>
      <div className="modal-body p-5 pt-0">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" {...register('email')} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" {...register('password')} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign up</button>
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <hr className="my-4" />
          <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
            <svg className="bi me-1" width={16} height={16}><use xlinkHref="#twitter" /></svg>
            Sign up with Twitter
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
            <svg className="bi me-1" width={16} height={16}><use xlinkHref="#facebook" /></svg>
            Sign up with Facebook
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
            <svg className="bi me-1" width={16} height={16}><use xlinkHref="#github" /></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <div className="mb-3">
    //         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    //         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')} />
    //         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    //         <input type="text" className="form-control" id="exampleInputPassword1" {...register('password')} />
    //       </div>
    //       <button type="submit" className="btn btn-primary">Submit</button>
    //     </div>
    //   </form>
    // </div>
  )
}

export default Signin