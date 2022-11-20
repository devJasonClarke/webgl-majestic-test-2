import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/platformer.loader.js",
    dataUrl: "build/platformer.data",
    frameworkUrl: "build/platformer.framework.js",
    codeUrl: "build/platformer.wasm",
  });
  return (
    <>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <div className="container">
        <Unity className="container" unityProvider={unityProvider} />
      </div>
    </>
  );
}
export default App;
