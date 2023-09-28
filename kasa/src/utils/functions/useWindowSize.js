import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

//   const MyApp = () => {
//     const { width, height } = useWindowSize();

//     return (
//       <p>
//         Window size: ({width} x {height})
//       </p>
//     );
//   };

//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <MyApp />
//   );

export default useWindowSize;
