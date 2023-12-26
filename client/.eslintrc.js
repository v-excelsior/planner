module.exports = {
  'extends': 'eslint-config-backendless',
  'rules'  : {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        'groups': [
          /* Styles */
          [
            '^.+\\.less$',
          ],

          /* node_modules */
          [
            '^react',
            '^@?\\w',
          ],

          /* DashboardsSDK shared group */
          [
            '^common',
            '^shared',
          ],

          /* Backendless related groups */
          [
            '^constants',
            '^components',
            '^utils',
            '^contexts',
            '^hooks',
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
