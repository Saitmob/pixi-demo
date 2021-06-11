/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-05-06 15:20:56
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-10 11:20:19
 */

module.exports = function(api) {
    api.cache(true);
    
    const presets = [
        ['@babel/preset-env', {
            targets: [
                'last 2 version',
                'ie >= 9'
            ]
        }],
        '@babel/preset-react'
    ];
    
    const options = {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true,   // or 'css'
    }

    const plugins = [
        ["import", options]
    ]
    return {
        presets,
        plugins
    }
}