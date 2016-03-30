'use strict'

var Seneca = require('seneca')

var Lab = require('lab')
var lab = exports.lab = Lab.script()
var Code = require('code')
var expect = Code.expect

var Async = require('async')
var Uuid = require('node-uuid')

var describe = lab.describe
var before = lab.before
var it = lab.it
var beforeEach = lab.beforeEach

var Shared = require('seneca-store-test')
var DefaultConfig = require('./default_config.json')

var si = Seneca()
si.use(require('seneca-entity'))
si.use(require('..'), DefaultConfig)

var storeName = 'sqlserver-store'
var actionRole = 'sql'

function clearDb (si) {
    return function clear (done) {
        Async.series([
            function clearFoo (next) {
                si.make('foo').remove$({ all$: true }, next)
            },
            function clearBar (next) {
                si.make('zen', 'moon', 'bar').remove$({ all$: true }, next)
            }
        ], done)
    }
}

function createEntities (si, name, data) {
    return function create (done) {
        Async.each(data, function (el, next) {
            si.make$(name, el).save$(next)
        }, done)
    }
}

function verify (cb, tests) {
    return function (error, out) {
        if (error) {
            return cb(error)
        }

        try {
            tests(out)
        }
        catch (ex) {
            return cb(ex)
        }

        cb()
    }
}

describe('Basic Test', function () {
    Shared.basictest({
        seneca: si,
        script: lab
    })

    Shared.sorttest({
        seneca: si,
        script: lab
    })

    Shared.limitstest({
        seneca: si,
        script: lab
    })

    Shared.sqltest({
        seneca: si,
        script: lab
    })
})
