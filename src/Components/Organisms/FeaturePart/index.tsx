import React from 'react'
import './style.scss'
import FeatureText from '../../Molecules/FeaturePartText'
import {Container} from 'react-bootstrap'
import FeatureBox from '../../Molecules/FeaturePartBox'
const Index = () => {
    return (
        <Container className = "mt-5 mb-5 pt-5 pb-5">
            <FeatureText/>
            <FeatureBox/>
        </Container>
    )
}

export default Index
