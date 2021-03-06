import {config, useSpring} from "react-spring";

const SpringAnimation = (trigger, delay) => {
    return useSpring({
        transform: trigger ? "translate3d(0, 0, 0)" : "translate3d(0, 10%, 0)",
        opacity: trigger ? 1 : 0,
        delay: delay ? delay : 200,
        config: config.stiff,
    });
};

export default SpringAnimation;