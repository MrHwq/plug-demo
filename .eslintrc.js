module.exports = {
    root: true,
    globals: {
        module: "readonly",
        require: "readonly",
        import: "readonly",
        chrome: "readonly"
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended"
    ]
}