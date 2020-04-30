import React from 'react'
import './style.scss'
import Title from '../../Atoms/Text';
import ProductCart from '../../Molecules/CardProduct'
import {Row} from 'react-bootstrap'
const Index = ({productArr} : {productArr:any}) => {
    const owlClass = 'o-TrendingList'
    return (
        <section className = {owlClass}>
            <Title className = 'text-center mb-5'><h2 className = {`${owlClass}-h2`}>Trending Products</h2></Title>
            <ProductCart productArr = {productArr}/>
        </section>
    )
}
export default Index
