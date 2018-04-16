import rates from "./rates.js";
import assert from 'assert';
import deepcopy from 'deepcopy';

describe("rates reducer tests", () => {
  it("should return inital state and state if no action", () => {
    const withNothing = rates()
    const withNoAction = rates({something: 'oui'})

    assert.deepEqual(withNothing, [])
    assert.deepEqual(withNoAction, {something: 'oui'})
  });

  it('should handle REPLACE_ALL', () => {
    const withEmpty = rates(
      [],
      {type: "REPLACE_ALL", data: sampleDataFromServer.slice().reverse().slice(0,24).reverse()}
    )
    assert.deepEqual(withEmpty, deepcopy(sampleDataFromServer.slice().reverse().slice(0,24).reverse()))
  });
});

const sampleDataFromServer = [
    {
        "id": 30,
        "rateValue": 5553.1,
        "rateTimestamp": "2018-04-12 09:59:31.481"
    },
    {
        "id": 31,
        "rateValue": 5553.3,
        "rateTimestamp": "2018-04-12 10:00:30.917"
    },
    {
        "id": 32,
        "rateValue": 5562.13,
        "rateTimestamp": "2018-04-12 10:01:30.915"
    },
    {
        "id": 40,
        "rateValue": 5562.13,
        "rateTimestamp": "2018-04-12 10:01:48.473"
    },
    {
        "id": 41,
        "rateValue": 5560,
        "rateTimestamp": "2018-04-12 10:16:47.8"
    },
    {
        "id": 50,
        "rateValue": 5569.4,
        "rateTimestamp": "2018-04-12 10:22:33.753"
    },
    {
        "id": 60,
        "rateValue": 5582.86,
        "rateTimestamp": "2018-04-12 10:37:40.125"
    },
    {
        "id": 70,
        "rateValue": 5582.48,
        "rateTimestamp": "2018-04-12 10:41:21.091"
    },
    {
        "id": 80,
        "rateValue": 5630,
        "rateTimestamp": "2018-04-12 10:47:19.682"
    },
    {
        "id": 90,
        "rateValue": 5611.97,
        "rateTimestamp": "2018-04-12 10:48:48.853"
    },
    {
        "id": 91,
        "rateValue": 5640,
        "rateTimestamp": "2018-04-12 11:03:48.318"
    },
    {
        "id": 92,
        "rateValue": 5990,
        "rateTimestamp": "2018-04-12 11:18:48.329"
    },
    {
        "id": 93,
        "rateValue": 6177.48,
        "rateTimestamp": "2018-04-12 11:33:48.327"
    },
    {
        "id": 100,
        "rateValue": 6300.01,
        "rateTimestamp": "2018-04-12 12:03:01.53"
    },
    {
        "id": 101,
        "rateValue": 6218,
        "rateTimestamp": "2018-04-12 12:18:00.988"
    },
    {
        "id": 102,
        "rateValue": 6265.5,
        "rateTimestamp": "2018-04-12 12:33:00.991"
    },
    {
        "id": 110,
        "rateValue": 6226.6,
        "rateTimestamp": "2018-04-12 12:39:25.685"
    },
    {
        "id": 111,
        "rateValue": 6244,
        "rateTimestamp": "2018-04-12 13:39:25.077"
    },
    {
        "id": 112,
        "rateValue": 6230.1,
        "rateTimestamp": "2018-04-12 14:39:25.105"
    },
    {
        "id": 113,
        "rateValue": 6197.93,
        "rateTimestamp": "2018-04-12 15:39:25.178"
    },
    {
        "id": 114,
        "rateValue": 6166.3,
        "rateTimestamp": "2018-04-12 16:39:25.087"
    },
    {
        "id": 115,
        "rateValue": 6237.11,
        "rateTimestamp": "2018-04-12 17:39:25.079"
    },
    {
        "id": 116,
        "rateValue": 6205,
        "rateTimestamp": "2018-04-12 18:39:25.083"
    },
    {
        "id": 117,
        "rateValue": 6242.4,
        "rateTimestamp": "2018-04-12 19:39:25.075"
    },
    {
        "id": 118,
        "rateValue": 6260,
        "rateTimestamp": "2018-04-12 20:39:25.065"
    },
    {
        "id": 119,
        "rateValue": 6360.9,
        "rateTimestamp": "2018-04-12 21:39:25.066"
    },
    {
        "id": 180,
        "rateValue": 6331.49,
        "rateTimestamp": "2018-04-12 22:39:25.066"
    },
    {
        "id": 181,
        "rateValue": 6402.36,
        "rateTimestamp": "2018-04-12 23:39:25.085"
    },
    {
        "id": 182,
        "rateValue": 6371.26,
        "rateTimestamp": "2018-04-13 00:39:25.077"
    },
    {
        "id": 183,
        "rateValue": 6362.33,
        "rateTimestamp": "2018-04-13 01:39:25.068"
    },
    {
        "id": 184,
        "rateValue": 6371.83,
        "rateTimestamp": "2018-04-13 02:39:25.081"
    },
    {
        "id": 185,
        "rateValue": 6360.91,
        "rateTimestamp": "2018-04-13 03:39:25.073"
    },
    {
        "id": 186,
        "rateValue": 6342.1,
        "rateTimestamp": "2018-04-13 04:39:25.084"
    },
    {
        "id": 187,
        "rateValue": 6339.21,
        "rateTimestamp": "2018-04-13 05:39:25.088"
    },
    {
        "id": 188,
        "rateValue": 6360.4,
        "rateTimestamp": "2018-04-13 06:39:25.082"
    },
    {
        "id": 189,
        "rateValue": 6425.1,
        "rateTimestamp": "2018-04-13 07:39:25.086"
    }
];
