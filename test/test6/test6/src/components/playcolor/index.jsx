import { useState } from "react"
import ColorInput from "./ColorInput"
import BoxInput from "./BoxInput"



const PlayColor = () => {
    const [color, setColor] = useState("black")
    const onChangeColor = (e) => setColor(e.target.value)
    const [width, setWidth] = useState(100)
    const onChangeWidth = (e) => setColor(e.target.value)
    const [height, setHeight] = useState(100)
    const onChangeHeight = (e) => setColor(e.target.value)
    console.log("PlayColor")
    const [isSelect, setIsSelect] = useState(false);

    return <>
        <div style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`
        }}></div>
        <ColorInput onChangeColor={onChangeColor} value={color} type="color"></ColorInput>
        {isSelect ? <><BoxInput onChange={onChangeWidth} value={width} type="number"></BoxInput>
            <BoxInput onChange={onChangeHeight} value={height} type="number"></BoxInput></> : null}

        {/* <input
            type="color"
            onChange={onChangeColor}
        /> */}
        {/* <input
            type="number"
            onChange={onChangeWidth}
            value={width} />
        <input
            type="number"
            onChange={onChangeHeight}
            value={height} /> */}
    </>
}
export default PlayColor;