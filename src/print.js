function printOwing (invoice) {
  let outstanding = 0;

  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  return printDetails(invoice, outstanding);
}

function printDetails(invoice, outstanding) {
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
