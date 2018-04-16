import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';

class BitcoinRate extends Component {
  render() {
    return (
      <div className="BitcoinRate">
        <Card>
          <CardHeader title="Current Bitcoin rate (BTC/EUR)"/>
          <CardText>
            {this.props.rates[0] ?
              this.props.rates[0].rateValue
              : " - "}
          </CardText>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rates: state.rates
  }
}

const ConnectedBitcoinRate = connect(
  mapStateToProps
)(BitcoinRate);

export default ConnectedBitcoinRate;
