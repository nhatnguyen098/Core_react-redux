import React from 'react'
import AboutPage from '../../Components/Pages/About'
interface IAbout {
    match:any;
    history:any;
}
const Index:React.FC<IAbout> = ({match,history}) => {
    return <AboutPage/>
}

export default Index
