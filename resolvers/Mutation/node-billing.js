const billingNode = require('../../nodes/billing');

const submitCreditCard = async (obj, {card: {card_number, expiry, birth, pwd_2digit}}, {headers}) => {
  const {isSuccess} = await billingNode.submitCreditCard({card: {card_number, expiry, birth, pwd_2digit}}, {headers});
  return isSuccess;
}

const deleteCreditCard = async (obj, {}, { headers }) => {
  const {isSuccess} = await billingNode.deleteCreditCard({}, { headers });
  return isSuccess;
}

const changeSubscription = async (obj, { nextPlan }, { headers }) => {
  const {isSuccess} = await billingNode.changeSubscription({ nextPlan }, { headers });
  return isSuccess;
}

module.exports = {
  submitCreditCard,
  deleteCreditCard,
  changeSubscription
}