module.exports = {
  extends: [require.resolve('js2me-eslint-config/react')],
  rules: {
    "sonarjs/no-array-index-key": "off",
    'unicorn/consistent-function-scoping': 'off',
  },
  overrides: [
    {
      files: [
        'src/entities/question-templates/model/data/**/constructor.ts',
      ],
      rules: {
        'unicorn/no-nested-ternary': 'off',
        'sonarjs/no-nested-conditional': 'off',
        'unicorn/no-new-array': 'off',
        'sonarjs/no-nested-functions': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/prefer-spread': 'off',
        'sonarjs/no-alphabetical-sort': 'off',
        'unicorn/no-useless-undefined': 'off',
        'sonarjs/unnecessary-character-escapes': 'off',
        'no-useless-escape': 'off',
      }
    }
  ]
};
