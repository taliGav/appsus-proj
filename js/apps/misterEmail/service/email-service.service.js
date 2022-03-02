import { utilService } from '../../../service/util-service.js';
import { storageService } from '../../../service/async-storage-service';

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
        emails = [
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
    const emails = query();
    const idx = emails.findIndex(email => email.id === emailId);
    emails.splice(idx, 1);
    utilService.saveToStorage(EMAILS_KEY, emails);
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
