
const fs = require('fs')

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString) //read original file first and create a notes object, and add to that
  } catch (e){
    console.log('catch activated');
    return []
  }
}

let saveNote = (note) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(note))
}

let addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  }

  let duplicateNotes = notes.filter((note) => note.title === title) //check if title already exists

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNote(notes)
    return note
  }
}
let getAll = () => {
  return fetchNotes()
}
let readNote = (title) => {
  let notes = fetchNotes()
  let readNote = notes.filter((note) => note.title === title) //create new array without the note to be removed
  return readNote
}
let removeNote = (title) => {
  let notes = fetchNotes()
  let newNotes = notes.filter((note) => note.title !== title) //create new array without the note to be removed
  saveNote(newNotes)
  return notes.length !== newNotes.length
}

module.exports = {   //makes the bellow a function you can call on notes
  addNote: addNote,
  getAll,
  readNote,
  removeNote
}
