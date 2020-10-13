import React from 'react'
import { dataMainMenu } from '../data'
import Error from './Error'
import Item from '../components/Item'

const index = (props)=>{

    const getData = (param) => dataMainMenu.find( (item) => item.sys.name === param )

    const Items = getData( props.match.params.name )

    if(!Items){
        return <Error />
    }
    
    return (
        <div className="container mb-5">
            <div className="row">
                {Items.items.map((item, index)=> <Item {...item} key={index} /> )}
            </div>
        </div>
    )

}
export default index;