module.exports = {
  'extends': 'eslint-config-backendless',
  'rules'  : {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        'groups': [
          /* node_modules */
          [
            '^react',
            '^@?\\w',
          ],

          [
            '^constants',
            '^branches',
            '^utils',
            '^leafs',
            '^contexts',
            '^hooks',
            'providers',
            'store',
          ],

          /* Relative imports */
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
  },
  'globals': {
    'DashboardsSDK': true,
    'Backendless'  : true,
  },
}
