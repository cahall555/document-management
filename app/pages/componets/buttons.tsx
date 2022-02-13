import 'tailwindcss/tailwind.css'
import React from 'react'

const Buttons = () =>{
    return(
    <div className="grid-rows-4" data-theme="cupcake">
        <div className="md:container md:mx-auto">
        <button className="btn">neutral</button> 
        <button className="btn btn-primary">primary</button> 
        <button className="btn btn-secondary">secondary</button> 
        <button className="btn btn-accent">accent</button> 
        <button className="btn btn-ghost">ghost</button> 
        <button className="btn btn-link">link</button>

      </div>

    </div>
    )
}

export default Buttons;