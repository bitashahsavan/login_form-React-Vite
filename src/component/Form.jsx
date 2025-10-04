import React from 'react'
import logo from '../assets/logo.svg'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
const Form = () => {
const scheme=yup.object().shape({
  username:yup.string().min(3).required('name is required'),
  email:yup.string().email('email isnot valid').required('email is required'),
  password:yup.string().min(4).required('password is requierd')


})
  const{register ,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(scheme)});


   const onformSubmit=(data)=>{
    console.log('form submited');
    console.log(data);
    
    
   }
  return (
    <>
    <div className="container">
        {/* <!-- !the image section --> */}
        <div className="content">
            <div className="logo">
                <img src={logo} alt="logo"/> 
            </div>
            <div className="image"></div>
            <div className="text">
                start for free & Get attractive offers today!
            </div>
        </div>
        {/* <!-- !the form section --> */}
        <form  onClick={handleSubmit(onformSubmit)}>
            <div className="social">
                <div className="title">Get started</div>
                <div className="question">
                    Already Have an Account?
                    <span> sign in</span>
                </div>

                <div className="btn">
                    <div className="btn-1">
                        <img src="https://img.icons8.com/?size=30&id=V5cGWnc9R4xj&format=png&color=000000" alt=""/>
                        Sign Up</div>
                    <div className="btn-2">
                        <img src="https://img.icons8.com/?size=30&id=118467&format=png&color=ffffff" alt=""/>
                        Sign Up</div>
                </div>

                <div className="or">Or</div>
            </div>
            {/* <!--  !user name input here --> */}
              <div>
                <label htmlFor="username">username</label>
                <input 
                type="text" 
                name="username" 
                id="username"
                placeholder="inter your name"
                {...register('username')}
                />
       
            {errors.username && (<p className='error'>{errors.username?.message}</p>)} 
    

              </div>

            {/* <!--  !Email input here --> */}
            <div>
                <label htmlFor="email"> Email</label>
                <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="abc@gmail.com"
                {...register('email')}
                />
                {errors.email && (<p className='error'>{errors.email?.message}</p>)} 
              </div>
              {/* <!--  !password input here --> */}
            <div>
                <label htmlFor="password"> Password</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                placeholder="password here"
                {...register('password')}
                />
                {errors.password && (<p className='error'>{errors.password?.message}</p>)} 
              </div>

              <button  type="submit" id="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Form