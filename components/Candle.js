import React from 'react';
import { Line, Rect } from "react-native-svg";


const Candle = ({close,open, high, low, index, width, candle, scaleY, scaleBody}) => {

    const MARGIN = 2;

    const x = index * width ;

    const max = Math.max(open, close);
    const min = Math.min(open, close);
    const fill = close > open ? "#4AFA9A" : "#E33F64";

    return (
        <>
            <Line
                x1={x-MARGIN + width / 2}
                y1={scaleY(low)}
                x2={x-MARGIN  + width / 2}
                y2={scaleY(high)}
                stroke={fill}
                strokeWidth={1}
            />
            <Rect
                x={x}
                y={scaleY(max)}
                width={width - MARGIN * 2}
                height={scaleBody(max - min)}
                {...{ fill }}
            />
        </>
    );
};

export default Candle;