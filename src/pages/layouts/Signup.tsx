import {SubmitHandler,useForm} from "react-hook-form"
import {useNavigate, useNavigationType} from "react-router-dom";
import { signin, signup } from '../../api/auth';
type TypeInputs = {
    name:string,
    email:string,
    password:string
}
const Signup = () => {
    const {register,handleSubmit,formState:{errors}}=useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit:SubmitHandler<TypeInputs>=data=>{
        signup(data);
        navigate("/signin");
    }
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name user</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" {...register('name')} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
  )
}

export default Signup