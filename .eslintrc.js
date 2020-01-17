module.exports = {
	root: true,
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module"
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ["plugin:vue/recommended", "eslint:recommended"],

	overrides: [
		{
			"files": ["*.vue"],
			"rules": {
				"indent": "off",
			}
		}
	],
	/**
	 * "off" 或 0 - 关闭规则
	 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
	 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
	 */
	rules: {
		"vue/max-attributes-per-line": [2, {
			"singleline": 10,
			"multiline": {
				"max": 1,
				"allowFirstLine": false
			}
		}],
		"vue/script-indent": ["error", "tab",
			{
				"baseIndent": 1
			}
		],
		"vue/html-indent": ["error", "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"vue/singleline-html-element-content-newline": "off",
		"vue/multiline-html-element-content-newline": "off",
		"vue/html-closing-bracket-spacing": ["error", {  //html标签是否加空格
			"startTag": "never",
			"endTag": "never",
			"selfClosingTag": "never"
		}],
		"vue/name-property-casing": ["error", "PascalCase"],
		"vue/no-v-html": "off",
		"accessor-pairs": 2,  // 定义对象的set存取器属性时，强制定义get
		"arrow-spacing": [2, {  // 要求箭头函数的参数使用圆括号
			"before": true,
			"after": true
		}],
		"block-spacing": [2, "always"],  // 强制在单行代码块中使用空格
		"brace-style": [2, "1tbs", {  //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
			"allowSingleLine": true
		}],
		"camelcase": [0, {  // 双峰驼命名格式
			"properties": "always"
		}],
		"comma-dangle": [2, "never"],  // 对象文字中最后一行不许带逗号
		"comma-spacing": [2, {  // 控制逗号前后的空格
			"before": false,
			"after": true
		}],
		"comma-style": [2, "last"],  //逗号位置
		"constructor-super": 2, //派生类的构造函数必须调用super()。非派生类的构造函数不得调用super()
		"curly": [2, "multi-line"],  //允许块语句内单行语句的分号
		"dot-location": [2, "property"],  //在点之前或之后放置换行符,"property"时成员表达式中的点应与属性部分位于同一行
		"eol-last": 2,  //非空文件的末尾至少执行一个换行符\n
		"eqeqeq": ["error", "always", {"null": "ignore"}],  //使用类型安全的相等运算符
		"generator-star-spacing": [2, {  //生成器 "*" 前后都有空格
			"before": true,
			"after": true
		}],
		"handle-callback-err": [2, "^(err|error)$"],  //处理异步行为的错误
		"indent": ["error", "tab"], //嵌套块和语句的特定缩进
		"jsx-quotes": [2, "prefer-single"],  //JSX 属性值可以包含字符串文字，用单引号分隔。
		"key-spacing": [2, {  //此规则在对象字面量属性中强制在冒号周围放置空格
			"beforeColon": false,
			"afterColon": true
		}],
		"keyword-spacing": [2, {  //围绕关键词function和if使用的空格
			"before": true,
			"after": true
		}],
		"new-cap": [2, {  //要求构造函数名以大写字母开头
			"newIsCap": true,
			"capIsNew": false
		}],
		"new-parens": 2,  //调用函数时不允许省略括号
		"no-array-constructor": 2,  //只能使用new Array
		"no-caller": 2,  //不可能使用arguments.caller并arguments.calle
		"no-console": [2, {  // 禁用 console
			"allow": ["warn"]
		}],
		"no-class-assign": 2,  //不可修改class创建的变量

		"no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
		"no-const-assign": 2,  //禁止修改const变量
		"no-control-regex": 0,  //允许正则表达式中的控制字符
		"no-delete-var": 2,  //不允许在变量上使用delete操作符。
		"no-dupe-args": 2,  //不允许在函数声明或表达式中使用重复的参数名称
		"no-dupe-class-members": 2,  //在类成员中有相同名称的声明
		"no-dupe-keys": 2,  //不允许在对象文字中使用重复键
		"no-duplicate-case": 2,  //不允许在switch语句的case子句中使用重复的测试表达式
		"no-empty-character-class": 2,  //不允许在正则表达式中使用空字符类
		"no-empty-pattern": 2,  //旨在标记解构结构对象和数组中的任何空模式
		"no-eval": 2,  //禁止使用eval()函数
		"no-ex-assign": 2,  //不允许在catch子句中重新分配值
		"no-extend-native": 2,  //不允许直接修改内建对象的原型
		"no-extra-bind": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-parens": [2, "functions"],
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-func-assign": 2,
		"no-implied-eval": 2,
		"no-inner-declarations": [2, "functions"],
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-iterator": 2,
		"no-label-var": 2,
		"no-labels": [2, {
			"allowLoop": false,
			"allowSwitch": false
		}],
		"no-lone-blocks": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-multi-spaces": 2,
		"no-multi-str": 2,
		"no-multiple-empty-lines": [2, {
			"max": 1
		}],
		"no-native-reassign": 2,
		"no-negated-in-lhs": 2,
		"no-new-object": 2,
		"no-new-require": 2,
		"no-new-symbol": 2,
		"no-new-wrappers": 2,
		"no-obj-calls": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-path-concat": 2,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-regex-spaces": 2,
		"no-return-assign": [2, "except-parens"],
		"no-self-assign": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-shadow-restricted-names": 2,
		"no-spaced-func": 2,
		"no-sparse-arrays": 2,
		"no-this-before-super": 2,
		"no-throw-literal": 2,
		"no-trailing-spaces": 2,
		"no-undef": 2,
		"no-undef-init": 2,
		"no-unexpected-multiline": 2,
		"no-unmodified-loop-condition": 2,
		"no-unneeded-ternary": [2, {
			"defaultAssignment": false
		}],
		"no-unreachable": 2,
		"no-unsafe-finally": 2,
		"no-unused-vars": [2, {
			"vars": "all",
			"args": "none"
		}],
		"no-useless-call": 2,
		"no-useless-computed-key": 2,
		"no-useless-constructor": 2,
		"no-useless-escape": 0,
		"no-whitespace-before-property": 2,
		"no-with": 2,
		"one-var": [2, {  //每个变量有一个声明"var"
			"initialized": "never"
		}],
		"operator-linebreak": [2, "after", {  //当一条语句太长而不适合单行时，通常会在分隔表达式的运算符旁边插入换行符
			"overrides": {
				"?": "before",
				":": "before"
			}
		}],
		"padded-blocks": [2, "never"],
		"quotes": [2, "single", {
			"avoidEscape": true,
			"allowTemplateLiterals": true
		}],
		"semi": [2, "never"],
		"semi-spacing": [2, {
			"before": false,
			"after": true
		}],
		"space-before-blocks": [2, "always"],
		"space-before-function-paren": [2, "never"],
		"space-in-parens": [2, "never"],
		"space-infix-ops": 2,
		"space-unary-ops": [2, {
			"words": true,
			"nonwords": false
		}],
		"spaced-comment": [2, "always", {
			"markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
		}],
		"template-curly-spacing": [2, "never"],
		"use-isnan": 2,
		"valid-typeof": 2,
		"wrap-iife": [2, "any"],
		"yield-star-spacing": [2, "both"],
		"yoda": [2, "never"],
		"prefer-const": 2,
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"object-curly-spacing": [2, "always", {
			objectsInObjects: false
		}],
		"array-bracket-spacing": [2, "never"]
	}
}
