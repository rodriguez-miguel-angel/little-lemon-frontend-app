import React, {useEffect} from "react";

/*
See <https://www.youtube.com/watch?v=zNHEJI0hK7c>.
*/
const useScript = () => {
    useEffect(() =>  {
        const script = document.createElement("script");
        script.src = "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";
        script.type = "javascript";
        script.async = true;
        script.crossOrigin = "anonymous";

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
};

export default useScript;