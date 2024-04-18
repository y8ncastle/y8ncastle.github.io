import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ReactGA from "react-ga4";

const RouteCheckerForGA = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (!window.location.href.includes("localhost")) {
        ReactGA.initialize(process.env.REACT_APP_GA_ID);
        setInitialized(true);
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    try {
      if (initialized) {
        ReactGA.set({ page: location.pathname });
        ReactGA.send("pageview");
      }
    } catch (err) {}
  }, [initialized, location]);

  return null;
};

export default RouteCheckerForGA;
