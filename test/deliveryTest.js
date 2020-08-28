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

deliverTest('test case2: deliveryDate', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    let res = deliveryDate(anOrder, true);
    t.is(2, res)
})

deliverTest('test case3: deliveryDate', t => {
    const anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    let res = deliveryDate(anOrder, true);
    t.is(3, res)
})