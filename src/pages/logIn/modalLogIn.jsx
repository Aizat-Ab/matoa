import React from 'react';
import './index.scss';

const ModalLogIn = ({active, setActive}) => {
    return (
        <div onClick={()=>setActive(false)} className ={active ? 'modall active' : 'modall'}>
            <div onClick={e => e.stopPropagation()} className='login__modalLogIn'>
            <div className='login__item'>
                <form className='login__form'>
                <label className='login__google-acc'>
                <input className='login__inputs' placeholder='Login with Google' type="text" />
                </label>
                <p>or</p>
                <input className='login__inputs' placeholder='Mail' type="text" />
                <input className='login__inputs' placeholder='Password' type="password" />
                </form>
                <div className='row'>
                <p className='login__que1'>Forgot your password?</p>
                <p className='login__que2'>Change password?</p>
                <div className='login__items'>
                <label className='login__label-check'>
                    <input className='checkbox'type="checkbox"/>
                    <span className='checkbox__fake'></span>
                    <span className='checkbox__text'>Remember</span>
                </label>
                <button className='login__log'>Log in</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default ModalLogIn;
