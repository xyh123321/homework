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


rankTest('rank case6:voyage length is 15 zone is china and history have 6 zone', t => {
  const voyage = {
    zone: 'china',
    length: 15,
  };
  const res = rating(voyage, history.slice(0,6));
  t.is(res, 'A')
});

rankTest('rank cas7:voyage length is 15 zone is china and history have 11 zone', t => {
  const voyage = {
    zone: 'china',
    length: 15,
  };
  const res = rating(voyage, history.slice(0,11));
  t.is(res, 'A')
});

rankTest('rank cas8', t => {
  const voyage = {
    zone: 'china',
    length: 20,
  };
  const res = rating(voyage, history.slice(0,20));
  t.is(res, 'B')
});

rankTest('rank cas9', t => {
  const voyage = {
    zone: 'west-indies',
    length: 20,
  };
  const res = rating(voyage, history.slice(0,20));
  t.is(res, 'B')
});

rankTest('rank cas10', t => {
  const voyage = {
    zone: 'west-indies',
    length: 2,
  };
  const res = rating(voyage, history.slice(0,20));
  t.is(res, 'A')
});

rankTest('rank case11', t => {
  const voyage = {
    zone: 'east-indies',
    length: 20,
  };
  const res = rating(voyage, history.slice(0,20));
  t.is(res, 'B')
});

rankTest('rank case12', t => {
  const voyage = {
    zone: 'china',
    length: 11,
  };
  const res = rating(voyage, history.slice(0,20));
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
  },
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
  },
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