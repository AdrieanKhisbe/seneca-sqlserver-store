'use strict'

var _ = require('lodash')
var Pg = require('pg')
var Uuid = require('node-uuid')
var RelationalStore = require('./relational-util')
var QueryBuilder = require('./query-builder')

var name = 'sqlserver-store'
var actionRole = 'sql'

var MIN_WAIT = 16
var MAX_WAIT = 5000

module.exports = function (opts) {
    var seneca = this


    opts.minwait = opts.minwait || MIN_WAIT
    opts.maxwait = opts.maxwait || MAX_WAIT

    var internals = {}



    return {name: store.name, tag: meta.tag}

}
