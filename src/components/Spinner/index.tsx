import React from "react";
import {FC} from 'react'
import './index.scss'
interface SpinnerProps {
    width?: number;
    height?: number;
    margin?: number;
}
const Spinner: FC<SpinnerProps> = ({width, height, margin}) => {

    return (
        <div className="lds-ring" style={{width: width, height: height, marginRight: margin}} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Spinner;