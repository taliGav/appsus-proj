import { utilService } from '../../../service/util-service.js';
import { storageService } from '../../../service/async-storage-service.js';

const EMAILS_KEY = 'emails';
_createEmails();

export const emailService = {
    query,
    get,
    addReview,
    remove,
    save,
    getEmptyEmail
};

function query() {
    return storageService.query(EMAILS_KEY);
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = [{
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
            from: 'xxxx'
        }, {
            id: 'e102',
            subject: 'spam!',
            body: 'github',
            isRead: true,
            sentAt: 1551145322654,
            to: 'mimi@mimi.com',
            from: 'aaaaa'
        }, {
            id: 'e103',
            subject: 'hiii!',
            body: 'alaska',
            isRead: false,
            sentAt: 1551197485214,
            to: 'mama@mama.com',
            from: 'bbbbb'
        }, {
            id: 'e104',
            subject: 'coco!',
            body: 'coco jambo',
            isRead: true,
            sentAt: 1551131502546,
            to: 'mumu@mumu.com',
            from: 'ccccc'
        }, {
            id: 'e105',
            subject: 'bye!',
            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            isRead: false,
            sentAt: 1551184052461,
            to: 'mlml@mlml.com',
            from: 'ddddd'
        }
        ];
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
    return emails;
}

function get(emailId) {
    console.log('bookId is:', emailId);
    return storageService.get(EMAILS_KEY, emailId);
}

function addReview(email, review) {
    review.id = utilService.makeId();
    if (!Array.isArray(email.reviews)) {
        email.reviews = [];
    }
    email.reviews.push(review);
    storageService.put(EMAILS_KEY, email);
    return email;
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}


function save(email) {
    email.id = utilService.makeId();
    const emails = query();
    emails.push(email);
    utilService.saveToStorage(EMAILS_KEY, emails);
    return email;
}

function getEmptyEmail() {
    return {
        id: '',
        vendor: '',
        maxSpeed: 0
    };
}

function _createEmail(vendor, maxSpeed = 250) {
    const email = {
        id: utilService.makeId(),
        vendor,
        maxSpeed,
    };
    return email;
}
