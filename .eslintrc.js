module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'google',
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'rules': {
        'require-jsdoc': ['error', {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': false,
                'ClassDeclaration': true,
                'ArrowFunctionExpression': true,
                'FunctionExpression': true,
            },
        }],
        // 'space-in-parens': ['error', 'always'],
        'indent': ['error', 4],
        // 'prettier/prettier': 'error',
        // 'curly': ['error', 'all'],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', { 'code': 80, 'ignoreUrls': true }],
        'no-mixed-operators': 'error',
        'no-tabs': ['error', { 'allowIndentationTabs': true }],
        'no-unexpected-multiline': 'error',
        // "quotes": ["error", "backtick"]
        'quotes': [
            'error',
            'single',
            { 'avoidEscape': true, 'allowTemplateLiterals': false },
        ],
    },
};
