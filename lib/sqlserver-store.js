'use strict'

var _ = require('lodash')
var Mssql = require('mssql')
var Uuid = require('node-uuid')
// FIXME: waiting for extraction in seneca-postgres
var RelationalStore = undefined // require('./relational-util')
var QueryBuilder = undefined //require('./query-builder')

var name = 'sqlserver-store'
var actionRole = 'sql'

var MIN_WAIT = 16
var MAX_WAIT = 5000

module.exports = function (opts) {
    var seneca = this


    opts.minwait = opts.minwait || MIN_WAIT
    opts.maxwait = opts.maxwait || MAX_WAIT

    var internals = {}

    // FIXME : define it
    var store = {}

    var meta = seneca.store.init(seneca, opts, store)

    return {name: store.name, tag: meta.tag}

}
