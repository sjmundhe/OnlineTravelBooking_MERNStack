import React, {Component} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';



class KBarChart2 extends Component {
/*
componentWillMount(){
    API.getClicksPerPage()
        .then((res) => {
            console.log(res.arr);

            this.setState({
              cityRevenue:res.arr,
              x:[{name: 'Home', HomeCar: res.arr[0], HomeHotel: res.arr[1], HomeFlight:res.arr[2], amt: 2400},
              {name: 'Listing', ListCar:res.arr[3], ListHotel:res.arr[4], ListFlight: res.arr[5], amt: 2210},
              {name: 'Bookings', BookCar: res.arr[6], BookHotel: res.arr[7], BookFlight: res.arr[8], amt: 2290},]
            })
        });
}
*/
    render(){
        return(
            <div>
                <BarChart width={1500} height={300} data={this.props.views1}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Bar dataKey="CarClicks" fill="#8884d8" />
                    <Bar dataKey="HotelClicks" fill="#8884d6" />
                    <Bar dataKey="FlightClicks" fill="#8884d4" />
                </BarChart>

                <BarChart width={1500} height={300} data={this.props.cars}
                          margin={{top: 15, right: 40, left: 30, bottom: 10}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Bar dataKey="CarClicks" fill="#8884d8" />
                    <Bar dataKey="HotelClicks" fill="#8884d6" />
                    <Bar dataKey="FlightClicks" fill="#8884d4" />
                </BarChart>

                <BarChart width={1500} height={300} data={this.props.flights}
                          margin={{top: 15, right: 40, left: 30, bottom: 10}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Bar dataKey="CarClicks" fill="#8884d8" />
                    <Bar dataKey="HotelClicks" fill="#8884d6" />
                    <Bar dataKey="FlightClicks" fill="#8884d4" />
                </BarChart>

                <BarChart width={1500} height={300} data={this.props.hotels}
                          margin={{top: 15, right: 40, left: 30, bottom: 10}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Bar dataKey="CarClicks" fill="#8884d8" />
                    <Bar dataKey="HotelClicks" fill="#8884d6" />
                    <Bar dataKey="FlightClicks" fill="#8884d4" />
                </BarChart>
        </div>
        )
    }
}

export default KBarChart2;
