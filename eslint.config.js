import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      semi: ['error', 'never'],
      'no-extra-semi': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
  },
)
