import React from "react";
import { loginAction, logoutAction } from "../Actions/loginActions";
import { useSelector, useDispatch } from "react-redux";

export default function Auth( props ) {
    
    const login = useSelector( state => state )
    const dispatch = useDispatch();

    return ( login ? 
        <button className="btn"
            onClick={ () => { dispatch( logoutAction()) }}>
            logout 
        </button> : 
        <button className="btn"
            onClick={ () => { dispatch( loginAction()) }} >
            login 
        </button> 
        )
}