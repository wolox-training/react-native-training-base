module.exports = {
  root: true,
  extends: ['wolox-react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    complexity: 'off',
    'no-nested-ternary': 'off',
    'no-magic-numbers': 'off',
    'new-cap': 'off',
    'comma-dangle': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }]
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['src'],
        settings: {
          'import/resolver': {
            node: {
              paths: ['src'],
              extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json']
            }
          }
        }
      }
    }
  }
};
