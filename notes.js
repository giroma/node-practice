console.log('starting notes');

let addNote = (title, body) => {
  console.log('adding note', title, body);
}
let getAll = () => {
  console.log('listing notes');
}
let readNote = (title) => {
  console.log('reading note', title);
}
let removeNote = (title) => {
  console.log('removing note', title);
}

module.exports = {   //makes the bellow a function you can call on notes
  addNote: addNote,
  getAll,
  readNote,
  removeNote
}
