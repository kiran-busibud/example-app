'use strict';

const test = (z, bundle) =>
  z.request({ url: 'https://auth-json-server.zapier-staging.com/me' });

const getSessionKey = async (z, bundle) => {
  const response = await z.request({
    url: 'https://httpbin.zapier-tooling.com/post',
    method: 'POST',
    body: {
      username: bundle.authData.username,
      password: bundle.authData.password,
    },
  });

  return {
    sessionKey: response.data.sessionKey,
  };
};

const includeSessionKeyHeader = (request, z, bundle) => {
  if (bundle.authData.sessionKey) {
    request.headers = request.headers || {};
    request.headers['X-API-Key'] = bundle.authData.sessionKey;
  }

  return request;
};

module.exports = {
  config: {

    type: 'session',
    sessionConfig: { perform: getSessionKey },

    fields: [
      { key: 'username', label: 'Username', required: true },
      {
        key: 'password',
        label: 'Password',
        required: true,

        type: 'password',
      },
    ],
    test,

    connectionLabel: '{{json.username}}',
  },
  befores: [includeSessionKeyHeader],
  afters: [],
};
