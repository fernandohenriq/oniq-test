import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../utils/auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
<<<<<<< HEAD
    <Route {...rest} render={routeProps => !!currentUser ? (
=======
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
>>>>>>> d6aef5369daf2f453d47c5c7e4a050e9055de72b
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;