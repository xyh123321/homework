function printOwing (invoice) {
  let outstanding = 0;

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  let res = '';
  res += '***********************\n';
  res += '**** Customer Owes ****\n';
  res += '***********************\n';
  res += `name: ${invoice.customer}\n`;
  res += `amount: ${outstanding}\n`;
  res += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  console.log(res);
  return res;
}

module.exports = {
  printOwing
};
