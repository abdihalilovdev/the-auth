import React from 'react';

const Login = () => {
    return (
        <form className='login container'>
            <h2 className='font-bold font-mono text-2xl'>Login</h2>
            <label>
                <input className='w-[100%] border-2 rounded py-2 px-4' type="text" placeholder='username'/>
            </label>
            <label>
                <input className='w-[100%] border-2 rounded py-2 px-4' type="password" placeholder='password'/>
            </label>
            <button className='login-btn bg-yellow-300 rounded py-2 text-xl font-mono'>Login</button>
        </form>
    );
};

export default Login;