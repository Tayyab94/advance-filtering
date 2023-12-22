import React from 'react'
import "./Price.css"
import Input from '../../components/Input'
const Price = ({ handleChange }) => {
    return (
        <div className='ml'>
            <h3 className='sidebar-tile price-title'>Price</h3>
            <Input handleChange={handleChange} value={""} title={"All"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={50} title={"0$ - 50$"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={100} title={"50$ - 100$"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={150} title={"100$ - 150$"} color={""} name={"test"} />
            <Input handleChange={handleChange} value={200} title={"Over 150$"} color={""} name={"test"} />

        </div>
    )
}

export default Price
