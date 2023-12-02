module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    },
    presets: ['module:metro-react-native-babel-preset'],
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ['./assets/fonts'], // stays the same
};