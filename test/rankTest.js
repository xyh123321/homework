const rankTest = require('ava');
const { rating } = require('../src/rank')

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
  t.is(res, 'B')
});

rankTest('rank case2:voyage length is 10 and history has not zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [];
  const res = rating(voyage, history);
  t.is(res, 'B')
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
  t.is(res, 'B')
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
  t.is(res, 'B')
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
  t.is(res, 'B')
});


rankTest('rank case6:voyage length is 9 zone is china and history has a zone', t => {
  const voyage = {
    zone: 'china',
    length: 15,
  };
  const res = rating(voyage, history.slice(0,6));
  t.is(res, 'A')
});









const voyage = {
  zone: 'china',
  length: 15,
};
const history = [
  {
    zone: 'china',
    profit: 1,
  },
  {
    zone: 'west-indies1',
    profit: 1,
  },
  {
    zone: 'east-indies',
    profit: 6,
  },
  {
    zone: 'west-indies',
    profit: 18,
  },
  {
    zone: 'china',
    profit: -1,
  },
  {
    zone: 'west-indies2',
    profit: 1,
  },
  {
    zone: 'west-indies3',
    profit: 1,
  },
  {
    zone: 'west-indies',
    profit: 1,
  }
];