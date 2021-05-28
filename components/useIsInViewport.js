import React, {useEffect, useState} from "react";

const UseIsInViewport = (ref) => {
    const [isInViewport, setIsInViewport] = useState(false);

    // if (ref !== null) {
        useEffect(() => {
            const {current} = ref;
            const componentPosYFromTop = current.getBoundingClientRect().top;
            const componentHeight = current.getBoundingClientRect().height;
            const componentPosYMiddleFromTop = componentPosYFromTop + (componentHeight);

            const onScroll = () => {
                const currentScrollPos = window.scrollY + window.innerHeight;
                if (componentPosYMiddleFromTop < currentScrollPos) {
                    setIsInViewport(true);
                }
            };

            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []);
    // }

    return isInViewport;
};

export default UseIsInViewport;