'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // 刘娜的接口****使用的时候只需   precess.env.self_skim   =>   http://12.231.25.1:8080 
    self_skim: '"http://12.231.25.1:8080"'
})