import React from 'react'
import {Image} from 'react-bootstrap'
import './style.scss'
interface IProImg {
    productOverlay: string;
    productImg?: string;
}
const Index:React.FC<IProImg> = ({productOverlay,productImg}) => {
    const owlClass = 'a-proImg'
    return (
        <div className = {`${owlClass}`}>
            <Image className = {`${owlClass}-overlay`}  src = {productOverlay}/>
            <Image className = {`${owlClass}-img`} src = {productImg}/>
        </div>
    )
}

export default Index
