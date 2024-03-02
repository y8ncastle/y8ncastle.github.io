import { loading } from "assets/assetStore";
import { Img } from "components/Image";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "route";
import "./App.css";

const App = () => {
  const [clientHeight, setClientHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setClientHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense
        fallback={
          <div className="loading-container" style={{ height: clientHeight }}>
            <Img src={loading} width={90} height={90} />
          </div>
        }
      >
        <CustomRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
