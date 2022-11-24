import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute( children ) {

    const isLogged = useSelector( state => state );
    return (<Route { ...rest }
    render={ ({ location }) => 

        login ? ( children ) : 
        ( 
        <Navigate  to={{ pathname:"/",
         state: { from:location }
        }}
        
        ></Navigate>
        )
    }>
    </Route>)

    return isLogged ?  children : <Navigate to='/' ></Navigate>
    ;
}