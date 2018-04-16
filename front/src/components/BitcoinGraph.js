import React, { Component } from 'react';
import axios from 'axios';
import ReactHighstock from 'react-highcharts/ReactHighstock'
import {connect} from 'react-redux';
import moment from 'moment'

class BitcoinGraph extends Component {
  componentDidMount() {
    const options = {
      url: 'http://ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:8081/api/rates',
      method: 'GET',
    };
    axios(options).then((response) => {
        var dataFetched = response.data
        dataFetched = dataFetched.slice().reverse()
        dataFetched = dataFetched.slice(0,24).reverse()
        this.props.dispatch({
          type: 'REPLACE_ALL',
          data: dataFetched
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props)
    const config = {
      rangeSelector: {
        selected: 4,
        inputEnabled: false,
        buttonTheme: {
          visibility: 'hidden'
        },
        labelStyle: {
          visibility: 'hidden'
        }
      },
      navigator: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      scrollbar: {
        enabled: false
      },
      tooltip: {
        pointFormat: "{point.y}"
      },
      title: {
        text: "Bitcoin rate history"
      },
      chart: {
        type: 'area',
        // width: 800
      },
      series: [{
        data: this.props.rates.map((item, key)=>{
          return({
            y: item.rateValue,
            name: moment.utc(item.rateTimestamp).local().format('ddd MMM DD YYYY h:mm A')
          })
        })
      }]
    }
    return (
      <div className="BitcoinGraph">
        <ReactHighstock config={config} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rates: state.rates
  }
}

const connectedBitcoinGraph = connect(
  mapStateToProps
)(BitcoinGraph)

export default connectedBitcoinGraph;
