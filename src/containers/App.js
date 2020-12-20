import React, {Component} from 'react'
import classes from './App.module.css'
import axios from '../components/axiosInstance/axiosInstance'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Cities from '../components/cities/Cities'
class App extends Component{
    state={
        brand:'VISION',
        tagline:'search everything!',
        buttons: [
            'Cities',
            'City Details',
        ],
        body:null,
    }
    navClickedHandler = (value) => {
        this.setState({body:value.target.innerHTML  })
    }
    render(){
        let content = null
        if(!this.state.body)
            content = <h2 style={{textAlign:'center',color:'red',textDecoration:'underline'}}>
                FEEL FREE TO EXPLORE ABOVE OPTIONS</h2>
        else if(this.state.body=='Cities')
            content = <Cities />
        return(
            <div>
                <Header brand={this.state.brand} tagline={this.state.tagline}/>
                <Navbar buttons={this.state.buttons} clicked={this.navClickedHandler}></Navbar>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}
export default App