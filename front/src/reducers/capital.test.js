import capital from "./capital.js";
import assert from 'assert';
import deepcopy from 'deepcopy';

describe("capital reducer tests", () => {
  it("should return inital state and state if no action", () => {
    const withNothing = capital()
    const withNoAction = capital({something: 'oui'})

    assert.deepEqual(withNothing, {
      eurCapital: null,
      btcCapital: null
    })
    assert.deepEqual(withNoAction, {something: 'oui'})
  });

  it('should handle SET_CAPITAL', () => {
    const withEmpty = capital(
      {
        eurCapital: null,
        btcCapital: null
      },
      {
        type: "SET_CAPITAL",
        data: sampleDataFromServer[0]
      }
    )
    assert.deepEqual(
      withEmpty,
      {
          eurCapital: sampleDataFromServer[0].capitalEurValue,
          btcCapital: sampleDataFromServer[0].capitalBtcValue
      })
  });
});

const sampleDataFromServer = [
    {
        "id": 176,
        "capitalEurValue": 3506.3127,
        "capitalBtcValue": 6493.6875,
        "capitalTimestamp": null
    }
]
