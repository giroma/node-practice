console.log('hw');
const fs = require('fs')
const os = require('os')
const _  = require('lodash')
const notes = require('./notes.js')

let name = os.userInfo()
// fs.appendFileSync('grrret.txt', `hey ${name.username}`)
const filteredArray = ['andrew',1,3,5,5,6,5,'aruiii', 'andrew']
console.log(_.uniq(filteredArray));
