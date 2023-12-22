import React from 'react'
import { AiFillCarryOut } from "react-icons/ai"
import "./Sidebar.css"
import Category from './Category/Category'
import Color from './Color/Color'
import Price from './Price/Price'
const Sidebar = ({ handleChange }) => {

    return (
        <>
            <section className='sidebar'>
                <div className='logo-container'>
                    <h2><AiFillCarryOut /></h2>
                </div>

                <Category handleChange={handleChange} />
                <Color handleChange={handleChange} />
                <Price handleChange={handleChange} />
            </section>
        </>
    )
}

export default Sidebar
