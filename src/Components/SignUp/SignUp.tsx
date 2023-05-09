import React, {useState} from 'react';

const SignUp = () => {

    const [userValue, setUserValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const submitHandler = () => {

    }

    return (
        <form className='signup container' onSubmit={submitHandler}>
            <h2 className='font-bold font-mono text-2xl'>Sign Up</h2>
            <label>
                <input
                    onChange={(e) => {
                        setUserValue(e.target.value)
                    }}
                    className='w-[100%] border-2 rounded py-2 px-4' type="text" placeholder='username'/>
            </label>
            <label>
                <input
                    onChange={(e) => {
                        setEmailValue(e.target.value)
                    }}
                    className='w-[100%] border-2 rounded py-2 px-4' type="email" placeholder='email'/>
            </label>
            <label>
                <input
                    onChange={(e) => {
                        setPasswordValue(e.target.value)
                    }}
                    className='w-[100%] border-2 rounded py-2 px-4' type="password" placeholder='password'/>
            </label>
            <button className='signup-btn bg-yellow-300 rounded py-2 text-xl font-mono'>Login</button>
        </form>
    );
};

export default SignUp;