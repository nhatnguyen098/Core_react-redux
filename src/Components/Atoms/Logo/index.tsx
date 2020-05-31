import React from 'react'
import './style.scss'
import {Image} from 'react-bootstrap'
import Logo from '../../../assets/logo.png'
import {Link} from 'react-router-dom'
const Index = () => {
    const owlClass = "wrapperLogo"
    return (
        <Link to = "/" className = {`${owlClass} d-flex`}>
            <Image src = {Logo} />
        </Link>
    )
}

export default Index
