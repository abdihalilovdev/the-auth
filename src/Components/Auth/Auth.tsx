import React from 'react';
import Login from "../Login/Login";
import {Route, Routes} from "react-router-dom";
import SignUp from "../SignUp/SignUp";

const Auth = () => {
    return (
        <div className='auth'>
            <div className='auth-block'>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/'} element={<SignUp/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Auth;