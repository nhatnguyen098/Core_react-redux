import React, {lazy,Suspense} from 'react'
const NotFound = lazy(() => import ('../../Components/Pages/NotFound'))
const Index = () => {
    return <Suspense fallback = {<div>Loading...</div>}><NotFound/></Suspense>
}

export default Index
