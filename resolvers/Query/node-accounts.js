const accountNode = require('../../nodes/account');

const user = async (obj, args, { headers }) => {
  const {user} = await accountNode.getUser({}, {headers});
  return user;
}

module.exports = {
  user
}