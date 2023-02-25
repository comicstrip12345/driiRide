module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': 0,
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', { 'code': 100 }],
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
