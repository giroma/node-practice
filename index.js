const fs = require('fs')
const os = require('os')
const _  = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

// let name = os.userInfo()
// fs.appendFileSync('grrret.txt', `hey ${name.username}`)
const filteredArray = ['andrew',1,3,5,5,6,5,'aruiii', 'andrew']
// console.log(_.uniq(filteredArray));


const argv = yargs.argv
let command = argv._[0]

// console.log('process',process.argv);
// console.log('yargs',argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('note added', note);
  } else {
    console.log('note title already exists');
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.readNote(argv.title)
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title)
  let message = noteRemoved ? 'note removed':'cant remove, note doesnt exist'
  console.log(message);
} else {
  console.log('command not recognized');
}
