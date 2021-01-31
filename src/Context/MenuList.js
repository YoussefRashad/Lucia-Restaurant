import React, { useState, useEffect } from 'react'
import { getMenuList } from '../API/MenuList'

export const MenuListContext = React.createContext()
const MenuListProvider = ({ children }) => {
    const [menuList, setMenuList] = useState([])
    const [featureMenuList, setFeatureMenuList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchMenuList = async ()=>{
            try {
                const response = await getMenuList()
                if (response.status === 200) {
                    setMenuList(response.data);
                    const newFeatureMenuList = response.data.filter(item => item.bestMenuItem)
                    setFeatureMenuList(newFeatureMenuList)
                }
            } catch (error) {
                console.log("not connected >> ", error);
            }
            finally{
                setLoading(false)
            }
        }
        fetchMenuList()
    }, []);

    const getMenuListByCategoryAndID = (category, ID)=> menuList.find(item => item.category === category && item._id === ID)
    
    return (
        <MenuListContext.Provider value={{
            menuList,
            featureMenuList,
            loading,
            getMenuListByCategoryAndID
        }}>
            {children}
        </MenuListContext.Provider>
    )
}

export default MenuListProvider
