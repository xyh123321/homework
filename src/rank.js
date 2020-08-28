function voyageRisk(voyage) {
  let result = 1;
  result = calcVoyageRiskWithVoyageLength(voyage, result);
  result = calcVoyageRiskWithVoyageZone(voyage, result);
  return Math.max(result, 0);;
}

function calcVoyageRiskWithVoyageZone(voyage, result) {
  return result += (['china', 'east-indies',].includes(voyage.zone)) ? 4 : 0;
}

function calcVoyageRiskWithVoyageLength(voyage, result) {
  result += voyage.length > 4 ? 2 : 0;
  result += voyage.length > 8 ? voyage.length - 8 : 0;
  return result;
}

function hasChinaInVoyageAndHistory(voyage, history) {
  return history.some(v => 'china' === v.zone) && voyage.zone === 'china';
}

function captainHistoryRisk(voyage, history) {
  let result = (history.length < 5) ? 5 : 1;
  result += history.filter(v => v.profit < 0).length;
  result -= hasChinaInVoyageAndHistory(voyage, history) ? 2 : 0;
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  result += voyage.zone === 'china' ? 1 : 0;
  result += voyage.zone === 'east-indies' ? 1 : 0;
  if (hasChinaInVoyageAndHistory(voyage, history)) {
    result += 3;
    result += history.length > 10 ? 1 : 0;
    result += voyage.length > 12 ? 1 : 0;
    result -= voyage.length > 18 ? 1 : 0;
  }
  else {
    result += history.length > 8 ? 1 : 0;
    result -= voyage.length > 18 ? 1 : 0;
  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return (vpf * 3 > (vr + chr * 2)) ? "A" : "B";
}

module.exports = {
  rating
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
