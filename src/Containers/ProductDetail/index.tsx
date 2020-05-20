import React from 'react'

const Index = ({match,history} : {match:any,history:any}) => {
    console.log(match)
    console.log(history)
    const {id} = match.params
    return (
        <div>
            params id : {id}
        </div>
    )
}

export default Index
