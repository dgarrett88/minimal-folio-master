import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTracker = ({ setActiveRoute, setRouteHistory }) => {

    const location = useLocation();

    useEffect(() => {
        setActiveRoute(location.pathname);
        setRouteHistory(prevHistory => [location.pathname, ...prevHistory].slice(0, 2));
      }, [location.pathname, setActiveRoute, setRouteHistory]);
    
    };

export default RouteTracker