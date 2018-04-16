import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

const buyButtonWraperStyle = {
  textAlign: "center",
  margin: "1vh"
}

const updateCapital = ({eurCapital, btcCapital}) => {

  const nowDate = new Date()
  var nowTimestamp = nowDate.getFullYear()
  nowTimestamp += "-" + nowDate.getMonth()
  nowTimestamp += "-" + nowDate.getDate()
  nowTimestamp += " " + nowDate.getHours()
  nowTimestamp += ":" + nowDate.getMinutes()
  nowTimestamp += ":" + nowDate.getSeconds()
  nowTimestamp += "." + nowDate.getMilliseconds()

  const options = {
    url: 'http://ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:8081/api/capital',
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      "capitalEurValue": eurCapital,
    	"capitalBtcValue": btcCapital,
    	"rateTimestamp": nowTimestamp
    },
  };
  axios(options).then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
}

const buyFunction = (
  value,
  capital,
  rate,
  dispatchFunction
) => {
  const amountInt = parseInt(value, 10)
  if(isNaN(amountInt)){
    alert("Please type a correct amount")
  } else {
    const newEurCapital = capital.eurCapital - value*rate
    const newBtcCapital = capital.btcCapital + value*rate
    if(newEurCapital < 0){
      alert('Not enough money')
    } else {
      dispatchFunction({
        type: "SET_CAPITAL",
        data: {
            capitalEurValue: newEurCapital,
            capitalBtcValue: newBtcCapital
          }
      })
      updateCapital({
        eurCapital: newEurCapital,
        btcCapital: newBtcCapital
      })
    }
  }
}

class Capital extends Component {
  constructor(props) {
    super(props);
    this.state = {amount: 0}
  }

  componentDidMount() {
    const options = {
      url: 'http://ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:8081/api/capital/latest',
      method: 'GET',
    };
    axios(options)
      .then((response) => {
        this.props.dispatch({
          type: "SET_CAPITAL",
          data: {
              capitalEurValue: response.data[0].capitalEurValue,
              capitalBtcValue: response.data[0].capitalBtcValue
            }
        })
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ready: true})
  }

  render() {
    console.log(this.props)
    return (
      <div className="Capital">
        <Card>
          <CardHeader title="Virtual Capital"/>
          <CardText>
            <List>
              <ListItem disabled={true} primaryText={this.props.capital.eurCapital}
                secondaryText="EUR"/>
              <ListItem disabled={true} primaryText={this.props.capital.btcCapital}
                secondaryText="BTC"/>
            </List>
          </CardText>
        </Card>
        <div style={buyButtonWraperStyle}>
          <TextField id="amountTextField" hintText="Amount" onChange={()=>{
              this.setState({amount: document.getElementById('amountTextField').value})
            }}/>
          <br />
          <RaisedButton label="Buy BTC" onClick={()=>{buyFunction(
              this.state.amount,
              this.props.capital,
              this.props.rate,
              this.props.dispatch
            )}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    capital: state.capital,
    rate: state.rates[0] ? state.rates[0].rateValue : null
  }
}

const connectedCapital = connect(
  mapStateToProps
)(Capital)

export default connectedCapital;
