function capital(state, action) {
  if (typeof state === "undefined") {
    return {
      eurCapital: null,
      btcCapital: null
    };
  }
  if (action === undefined){
    return state
  }

  switch (action.type) {
    case "SET_CAPITAL":
      return({
          eurCapital: action.data.capitalEurValue,
          btcCapital: action.data.capitalBtcValue
        })
    default:

  }

  return state;
}

export default capital;
