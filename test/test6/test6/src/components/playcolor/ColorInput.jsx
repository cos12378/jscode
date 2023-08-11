import { useState } from "react";

const ColorInput = ({ onChangeColor }) => {
    const [color, setColor] = useState("black");

    // const handleColorChange = (e) => {
    //     setColor(e.target.value);
    //     onChangeColor(e.target.value);
    // };

    return (
        <input
            type="color"
            onChange={onChangeColor}
        />)
}

export default ColorInput; 