const printTest = require('ava');
const { printOwing } = require('../src/print')

printTest('test case1:console', t => {
  const invoice = {
    borderSpacing: [
      { amount: 5 },
      { amount: 10 }
    ],
    customer: 'jayden'
  }
  const today = new Date();
  const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  let res = printOwing(invoice);

  t.is('***********************\n'+
  '**** Customer Owes ****\n'+
  '***********************\n'+
  `name: jayden\n`+
  `amount: 15\n`+
  `amount: ${dueDate.toLocaleDateString()}\n`
  , res)

})
