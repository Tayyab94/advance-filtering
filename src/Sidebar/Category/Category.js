import React from 'react'
import "./Category.css"
import Input from '../../components/Input'
const Category = ({ handleChange }) => {

    return (
        <div>
            <h2 className='sidebar-title'>Category</h2>
            <div>

                <Input handleChange={handleChange} value={""} title={"All"} color={""} name={"test"} />
                <Input handleChange={handleChange} value={"sneakers"} title={"sneakers"} color={""} name={"test"} />
                <Input handleChange={handleChange} value={"flats"} title={"Flats"} color={""} name={"test"} />
                <Input handleChange={handleChange} value={"sandals"} title={"sandals"} color={""} name={"test"} />
                <Input handleChange={handleChange} value={"heels"} title={"Heels"} color={""} name={"test"} />

            </div>
        </div>
    )
}

export default Category
