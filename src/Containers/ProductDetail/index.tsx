import React,{useEffect} from 'react'
import {fetching_pro_by_id} from '../../Redux/Actions'
import ProductDetail from '../../Components/Pages/ProductDetail'
import {useSelector,useDispatch} from 'react-redux'
const Index = ({match,history} : {match:any,history:any}) => {
    // console.log(match)
    // console.log(history)
    const {id} = match.params
    const {data} = useSelector((state:any) => state.home.proDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetching_pro_by_id(id))
    },[id,dispatch])
    console.log(data)
    return <ProductDetail/>
}

export default Index
