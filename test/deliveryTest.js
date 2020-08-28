const deliverTest = require('ava');
const { deliveryDate } = require('../src/delivery')

deliverTest('test case1: deliveryDate', t => {
    const anOrder = {
        deliveryState: 'jayden',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    let res = deliveryDate(anOrder, true);
    t.is(4, res)
})