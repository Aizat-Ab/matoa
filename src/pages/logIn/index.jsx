import React from 'react';
import './index.scss';
import ModalLogIn from './modalLogIn.jsx'

const LogIn = () => {
    const [modalActive, setModalActive] = React.useState(false);
    const setActive = () => {
        setModalActive(false)
    }

    return (
        <div>
            <button onClick={()=>setModalActive(!modalActive)} className='login'>
<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0937 5.42961C15.695 8.04541 14.4099 10.7298 11.9953 11.9018C15.6303 13.0124 18.115 16.365 18.1201 20.1659V21.6059C18.1201 21.871 17.9052 22.0859 17.6401 22.0859C17.375 22.0859 17.1601 21.871 17.1601 21.6059V20.1659C17.1601 15.9244 13.7216 12.4859 9.48009 12.4859C5.23854 12.4859 1.80009 15.9244 1.80009 20.1659V21.6059C1.80009 21.871 1.58518 22.0859 1.32009 22.0859C1.05499 22.0859 0.840088 21.871 0.840088 21.6059V20.1659C0.845159 16.365 3.32989 13.0124 6.96489 11.9018C4.55028 10.7298 3.2652 8.04541 3.86649 5.42961C4.46778 2.81381 6.79607 0.960007 9.48009 0.960007C12.1641 0.960007 14.4924 2.81381 15.0937 5.42961ZM9.48009 1.9259C6.82912 1.9259 4.68009 4.07493 4.68009 6.7259C4.68305 9.37564 6.83035 11.5229 9.48009 11.5259C12.1311 11.5259 14.2801 9.37687 14.2801 6.7259C14.2801 4.07493 12.1311 1.9259 9.48009 1.9259Z" fill="black"/>
</svg>
<span>Log In</span>
</button>
       <ModalLogIn active={modalActive} setActive={setActive}/> 
        </div>

    )
}

export default LogIn;