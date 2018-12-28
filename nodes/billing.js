const fetch = require('node-fetch')

const getCreditCard = async ({}, {headers}) => {
  const {creditCard} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/credit_card`, {
    method: 'GET',
    headers
  })
  .then(data => data.json());

  return {creditCard};
}

const getBalance = async ({}, {headers}) => {
  const {balance} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/balance`, {
    method: 'GET',
    headers
  })
  .then(data => data.json());

  return {balance};
}

const getBalanceHistory = async ({skip, limit}, {headers}) => {
  const {balanceHistory} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/balance/history?skip=${skip}&limit=${limit}`, {
    method: 'GET',
    headers
  })
  .then(data => data.json());

  return {balanceHistory};
}

const getSubscription = async ({}, {headers}) => {
  const {subscription} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/subscription`, {
    method: 'GET',
    headers
  })
  .then(data => data.json());

  return {subscription};
}

const submitCreditCard = async ({card: {card_number, expiry, birth, pwd_2digit}}, {headers}) => {
  const {isSuccess} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/credit_card`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      card: {
        card_number,
        expiry,
        birth,
        pwd_2digit
      }
    })
  })
  .then(data => data.json());

  return {isSuccess};
}

const deleteCreditCard = async ({}, {headers}) => {
  const {isSuccess} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/credit_card`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json());

  return {isSuccess};
}

const changeSubscription = async ({nextPlan}, {headers}) => {
  const {isSuccess} = await fetch(`http://app.billing.node.internal.getbouncecode.com:3000/subscription`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      nextPlan
    })
  })
  .then(data => data.json());

  return {isSuccess};
}

module.exports = {
  getCreditCard,
  getBalance,
  getBalanceHistory,
  getSubscription,
  submitCreditCard,
  deleteCreditCard,
  changeSubscription
}