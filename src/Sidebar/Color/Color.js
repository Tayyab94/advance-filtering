import React from 'react'
import "./Color.css"
import Input from '../../components/Input'
const Color = ({ handleChange }) => {
    return (
        <div>
            <h3 className='color-title'>Colors</h3>
            {/* <Input /> */}


            <Input handleChange={handleChange} value={""} title={"All"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={"black"} title={"Black"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={"blue"} title={"Blue"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={"red"} title={"Red"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={"green"} title={"Green"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={"white"} title={"White"} color={""} name={"test"} />

        </div>
    )
}

export default Color
