import React, { Component } from 'react'
import { LoginAPI, AuthAPI, SignupAPI } from './API/AuthAPI'


const RestaurantContext = React.createContext()
export default class RestaurantProvider extends Component {
    state = {
        token:'',
        userInfo:{},
        isUser:false,
    }
    
    componentDidMount(){
        this.checkAuth()
    }

    setStateSyncByEmptyData = ()=>{
        return new Promise(resolve=>{
            this.setState({
                token: '',
                userInfo: {},
                isUser: false
            }, ()=> resolve())
        })
    }

    setStateSyncByData = (stateUpdate)=>{
        return new Promise(resolve =>{
            this.setState( stateUpdate, ()=> resolve() )
        })
    }

    checkAuth = ()=>{
        const token = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null ;
        if(token){
            AuthAPI(token).then( async (response) =>{

                if(response.status === 200){
                    await this.setStateSyncByData({
                        token,
                        userInfo:response.data,
                        isUser:true
                    })
                }else{
                    console.log('token is removed');
                    localStorage.removeItem('userData')
                }
            })
        }
    }

    Login  = (data)=>{
        LoginAPI(data).then( async (response)=>{
            if(response.status === 200){
                localStorage.setItem('userData', JSON.stringify(response.data.token))
                
                await this.setStateSyncByData({
                    token: response.data.token,
                    userInfo: response.data.user,
                    isUser:true,
                })
                return true
            }
            else{
                console.log(response, response.message);
                return false
            }
        })
    }

    Signup = (data)=>{
        SignupAPI(data).then( async (response) =>{
            if(response.status === 200){
                localStorage.setItem('userData', JSON.stringify(response.data.token))
                
                await this.setStateSyncByData({
                    token: response.data.token,
                    userInfo: response.data.user,
                    isUser:true,
                })
                return true;
            }
            else{
                console.log('else >>> ', response);
                return false
            }
        })
    }

    Logout = async ()=>{
        localStorage.removeItem('userData')
        await this.setStateSyncByEmptyData()
        console.log("logout");
    }


    //  Auth(JSON.parse(localStorage.getItem('userData')).token, (data)=>{ console.log(data) })
    render() {
        return (
            <RestaurantContext.Provider value={{
                ...this.state,
                Login: this.Login,
                Logout: this.Logout,
                Signup: this.Signup
                }}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
}

const RestaurantConsumer = RestaurantContext.Consumer;

export function withRestaurantConsumer(Component){
    return function ConsumerWrapper(props){
        return(
            <RestaurantContext.Consumer>
                {
                    (value)=><Component  {...props} context={ value } />
                }
            </RestaurantContext.Consumer>
        )
    }
}

export { RestaurantProvider, RestaurantContext, RestaurantConsumer };
