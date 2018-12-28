const billingNode = require('../../nodes/billing');

const getCreditCard = async (obj, {}, {headers}) => {
  const {creditCard} = await billingNode.getCreditCard({}, {headers});
  return creditCard;
}

const getBalance = async (obj, {}, {headers}) => {
  const {balance} = await billingNode.getBalance({}, {headers});
  return balance;
}

const getBalanceHistory = async (obj, {skip, limit}, {headers}) => {
  const {balanceHistory} = await billingNode.getBalanceHistory({skip, limit}, {headers});
  return balanceHistory;
}

const getSubscription = async (obj, {}, {headers}) => {
  const {subscription} = await billingNode.getSubscription({}, {headers});
  return subscription;
}

module.exports = {
  getCreditCard,
  getBalance,
  getBalanceHistory,
  getSubscription
}