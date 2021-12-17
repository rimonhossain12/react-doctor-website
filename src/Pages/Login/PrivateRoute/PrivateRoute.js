import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Route, Redirect, useHistory, useLocation
} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';



const PrivateRoute = ({ children, ...rest }) => {
    const { user,isLoading } = useAuth()
    if(isLoading) {
        return <CircularProgress />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;