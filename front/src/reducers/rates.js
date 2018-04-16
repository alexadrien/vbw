import assert from 'assert'

function rates(state, action) {
  if (typeof state === "undefined") {
    return [];
  }
  if (action === undefined){
    return state
  }

  switch (action.type) {
    case "REPLACE_ALL":
      assert(action.data.length <= 24)
      return [
        ...action.data
      ]
    default:

  }

  return state;
}

export default rates;
