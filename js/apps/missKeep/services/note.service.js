import { utilService } from '../service/util-service.js';
import { storageService } from '../service/async-storage-service.js';

const NOTES_KEY = 'notes';
_createBooks();

export const noteService = {
  query,
  get,
  addReview,
  // remove,
  // save,
  // getEmptyBook
};

function query() {
  return storageService.query(BOOKS_KEY);
}


const notes = [
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