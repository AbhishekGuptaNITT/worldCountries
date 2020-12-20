import React,{Component} from 'react'
import classes from './Cities.module.css'
import axios from '../axiosInstance/axiosInstance'
class Cities extends Component{
    state={
        cityList:[],
        offset:0,
    }
    shouldComponentUpdate(prevState,nextState){
        if(prevState==nextState)
            return 0;
        return 1
    }
    componentDidUpdate(){
        let myoffset = String(this.state.offset);
        let myRequest = {
            method: 'GET',
            url: 'cities/',
            params:{
                limit:'10',
                offset:myoffset,
            },
            headers: {
              'x-rapidapi-key': 'd9df164fd7msh056130385103015p106ed5jsn988c0b750246',
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
          };
        axios.request(myRequest).then(
            (response) => {
                this.setState({
                    cityList:response.data.data,
                })
            }
        ).catch(
            (error) => console.log(error)
        )
    }
    chOffset(x){
        let curroffset = this.state.offset;
        curroffset+=x;
        if(curroffset<0){
            alert('Cant go back')
        }
        else
            this.setState({offset:curroffset})
    }
    render(){   
        let data = this.state.cityList,error=null
        if(data.length==0)
            error = <h1 style={{textAlign:'center',color:'red'}}>Fetching...</h1>
        const dataDisplay = data.map(
            (city) => {
                return(
                    <tr>
                        <td>{city.name}</td>
                        <td>{city.country}</td>
                        <td>{city.countryCode}</td>
                        <td>{city.region}</td>
                        <td>{city.regionCode}</td>
                        <td>{city.latitude}</td>
                        <td>{city.longitude}</td>
                    </tr>
                )
            }
        )
        return(
            <div className={classes.output}>
                {error}
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>COUNTRY</th>
                            <th>COUNTRY CODE</th>
                            <th>REGION</th>
                            <th>REGION CODE</th>
                            <th>LATITUDE</th>
                            <th>LONGITUDE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDisplay}
                    </tbody>
                </table>
                <div className={classes.pagination}>
                    <span onClick={() => this.chOffset(-10)}>Previous</span>
                    <span onClick={() => this.chOffset(10)}>Next</span>
                </div>
            </div>
        )
    }
}
export default Cities