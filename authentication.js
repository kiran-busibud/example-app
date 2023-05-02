module.exports = {
    type: 'basic',
    test: {
      headers: {
        'X-USERNAME': '{{bundle.authData.username}}',
        'X-PASSWORD': '{{bundle.authData.password}}',
      },
      params: {
        password: '{{bundle.authData.password}}',
        username: '{{bundle.authData.username}}',
      },
      url: 'https://75c7-136-185-200-116.ngrok-free.app/zapier/auth',
    },
    fields: [
      { computed: false, key: 'username', required: true, label: 'username' },
      {
        computed: false,
        key: 'password',
        required: true,
        label: 'password',
        type: 'password',
      },
    ],
    basicConfig: {},
  };
  