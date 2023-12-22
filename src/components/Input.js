import React from 'react'

const Input = ({ handleChange, value, title, name, color }) => {
    return (
        <>
            <label htmlFor={value} className='sidebar-label-container'>
                <input onChange={handleChange} value={value} type="radio" name={name} />
                <span className='checkmark' style={{ background: color }}></span> {title}
            </label>
        </>
    )
}

export default Input
