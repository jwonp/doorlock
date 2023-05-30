module.exports = {
  root: true,
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:all',
    'plugin:react',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unescaped-entities': 'off',
  },
};
