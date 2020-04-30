import React from 'react'
import './style.scss'
interface IText {
    className?: string;
    color?: string;
}
const Index:React.FC<IText> = ({children,className,color}) => {
    const owlClass = 'a-text'
    return (
        <div className = {`${owlClass} ${className} text-${color}`}>
            {children}
        </div>
    )
}

export default Index
