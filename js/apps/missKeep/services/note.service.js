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

function getEmptyNoteGeneral(type, maxSpeed = 0) {
    return {
        id: '',
        type,
        isPinned: false,
        info: null
    };
}

function _createNote(type) {
    const note = getEmptyNoteGeneral(type);
    car.id = utilService.makeId();
    return note;
}


function addNote(note, review) {
    note.id = utilService.makeId();
    if (!Array.isArray(book.reviews)) {
        book.reviews = [];
    }
    book.reviews.push(note);
    storageService.put(BOOKS_KEY, book);
    return book;
}

function getEmptyImg(vendor = '', maxSpeed = 0) {
    return {
        id: '',
        vendor,
        maxSpeed,
        prevOwners: []
    };
}
function getEmptyTodos(vendor = '', maxSpeed = 0) {
    return {
        id: '',
        vendor,
        maxSpeed,
        prevOwners: []
    };
}
function getEmptyTxt(vendor = '', maxSpeed = 0) {
    return {
        id: '',
        vendor,
        maxSpeed,
        prevOwners: []
    };
}
function getEmptyVideo(type, maxSpeed = 0) {
    return {
        id: '',
        type,
        isPinned: false,
        info: null
    };
}

