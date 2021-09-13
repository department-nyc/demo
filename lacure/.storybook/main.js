var path = require('path')
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    stories: [
        '../**/stories.@(js|jsx|ts|tsx)',
        '../**/*.stories.@(js|jsx|ts|tsx)',
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

    webpackFinal: async (config) => {
        config.resolve.alias['@/'] = path.resolve(__dirname, '../')
        config.resolve.mainFiles = ['index']

        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ]
        return config
    },
}
