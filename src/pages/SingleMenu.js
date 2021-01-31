import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dataMainMenu } from '../data'
import Error from './Error'
import Item from '../components/Item'

import { MenuListContext } from '../Context/MenuList'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

const SingleMenu = ()=>{

    React.useEffect(() => {
        scrollAutoFromBackToTop()
    }, [])

    const { category } = useParams();
    const { menuList, loading } = React.useContext(MenuListContext)
    const [menuListSelected, setMenuListSelected] = useState([])

    useEffect(() => {
        const list = menuList.filter(item => item.category === category)
        setMenuListSelected(list)
    }, [category])
    
    if(loading){
        return <h2>Loading ...</h2>
    }

    if (!menuListSelected.length){
        return <Error />
    }

    return (
        <div style={{perspective: '2000px'}}>
            <div className="container mb-5">
                <div className="row">
                    {
                        menuListSelected.map((item, index) => <Item {...item} key={index} />)
                    }
                </div>
            </div>
        </div>
    )

}
export default SingleMenu;