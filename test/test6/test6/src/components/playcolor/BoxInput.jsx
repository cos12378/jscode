import { useState } from "react";

const BoxInput = ({ onChangeWidhth, onChangeHeight }) => {
    const [width, setWidth] = useState(100)
    const [height, setHeight] = useState(100)


    return (<>
        <input
            type="number"
            onChange={onChangeWidhth ? (e) => onChangeWidhth(e.target.value) : null}
        />

        <input
            type="number"
            onChange={onChangeHeight ? (e) => onChangeHeight(e.target.value) : null}
        />
    </>)

}

export default BoxInput; 