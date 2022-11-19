import {useState, useEffect} from 'react';

const useViewport = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleWindowResize = () => setIsDesktop(window.innerWidth >= 1130);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return isDesktop so we can use it in our components
  return { isDesktop };
}

export default useViewport;