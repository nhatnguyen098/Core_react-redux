import React from 'react'
import './style.scss'
import {Image} from 'react-bootstrap'
import Logo from '../../../assets/logo.png'
const Index = () => {
    const owlClass = "wrapperLogo"
    return (
        <a onClick = {() => console.log('home page')} className = {`${owlClass} d-flex`}>
            <Image src = {Logo} />
        </a>
    )
}

export default Index
