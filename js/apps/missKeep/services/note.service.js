import { utilService } from './../../../service/util-service.js';
import { storageService } from './../../../service/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    get,
    // addNote,
};

function query() {
    return storageService.query(NOTES_KEY);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function get(noteId) {
    console.log('noteId is:', noteId);
    return storageService.get(NOTES_KEY, noteId);
  }
  
  
// function addNote(note, review) {
//     review.id = utilService.makeId();
//     if (!Array.isArray(book.reviews)) {
//       book.reviews = [];
//     }
//     book.reviews.push(review);
//     storageService.put(BOOKS_KEY, book);
//     return book;
//   }
  