import React from "react";
import { LottieOptions, useLottie } from "lottie-react";
interface IFullScreenLoaderProps {
  classNames?: string[];
}
const rocket = require("assets/lottie/rocket.json");
const FullScreenLoader = (props: IFullScreenLoaderProps) => {
  const options: LottieOptions = {
    animationData: rocket,
    loop: true,
    style: {
      width: 400,
      height: 400,
    },
    className: "full-screen-loader__container",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options);

  return <div className="full-screen-loader">{View}</div>;
};

export default FullScreenLoader;
