const fetch = require('node-fetch')

const signupMailchimp = async (obj, { email, listId, interests, mergeFields }, { headers }) => {
  const json = await fetch(`https://us16.api.mailchimp.com/3.0/lists/${listId}`, {
    method: 'POST',
    headers: {
      "authorization": "apikey c9a6093dfb6e27b506f5b8af719546b0-us16",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "members": [{
        "email_address": email,
        "status": "subscribed",
        "merge_fields": mergeFields,
        "interests": interests
      }],
      "update_existing": true
    })
  })
  .then(data => data.json());

  if (json.errors.length !== 0) {
    throw new Error(json.errors[0].error);
  }

  return true;
}

module.exports = {
  signupMailchimp
}