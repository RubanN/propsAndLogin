import React, { useState } from 'react'
import Fawn from './Fawn';
import Header from './Header'
import Home from './Home'


export default function Parent(props) {
    const updateColour = () => {
        console.log('the colour is beige');
    }
    return (
        <div>
            <Header />
            <Home />
            <Fawn skinColour={'brown'} updateColour={updateColour} />
        </div>
    )
}
