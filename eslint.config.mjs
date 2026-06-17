import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // ;
      semi: ['error', 'always'],

      // ''
      quotes: ['error', 'single', { avoidEscape: true }],

      // `Hello ${name}`
      'prefer-template': 'error',

      // () => {}
      'prefer-arrow-callback': 'error',

      // одинаковые return
      'consistent-return': 'error',

      // import type
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      // пустые интерфейсы
      '@typescript-eslint/no-empty-interface': 'error',

    //   // явный тип возврата
    //   '@typescript-eslint/explicit-function-return-type': [
    //     'error',
    //     {
    //       allowExpressions: true,
    //     },
    //   ],
    },
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
