const rankTest = require('ava');
const {rating} = require('../src/rank')
// rankTest('foo', t => {
//   t.pass();
// });

// rankTest('bar', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });

rankTest('rank case1:voyage length is 10 and history has a zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const res = rating(voyage, history);
  t.is(res,'B')
});

rankTest('rank case2:voyage length is 10 and history has not zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [];
  const res = rating(voyage, history);
  t.is(res,'B')
});

rankTest('rank case3:voyage has not zone and history has a zone', t => {
  const voyage = {};
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const res = rating(voyage, history);
  t.is(res,'B')
});


rankTest('rank case4:voyage length is 4 zone is china and history has a zone', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const res = rating(voyage, history);
  t.is(res,'B')
});

rankTest('rank case5:voyage length is 9 zone is china and history has a zone', t => {
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const res = rating(voyage, history);
  t.is(res,'B')
});

