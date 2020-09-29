module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/typescript'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'styled-jsx/babel',
      {sourceMaps: false, plugins: ['styled-jsx-plugin-scss']}
    ]
  ]
};
