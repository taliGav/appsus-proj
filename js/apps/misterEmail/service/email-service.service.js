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
            stared: false,
            from: 'xxxx'
        }, {
            id: 'e102',
            subject: 'spam!',
            body: 'github',
            isRead: false,
            sentAt: 1551145322654,
            to: 'mimi@mimi.com',
            stared: false,
            from: 'aaaaa'
        }, {
            id: 'e103',
            subject: 'hiii!',
            body: 'alaska',
            isRead: false,
            sentAt: 1551197485214,
            to: 'mama@mama.com',
            from: 'bbbbb',
            stared: false
        }, {
            id: 'e104',
            subject: 'coco!',
            body: 'coco jambo',
            isRead: false,
            sentAt: 1551131502546,
            to: 'mumu@mumu.com',
            stared: false,
            from: 'ccccc'
        }, {
            id: 'e105',
            subject: 'bye!',
            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            isRead: false,
            sentAt: 1551184052461,
            to: 'mlml@mlml.com',
            stared: false,
            from: 'ddddd'
        }
        ];
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
    return emails;
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
        .then(email => {
            return _setNextPrevEmailId(email);
        });
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
    if (email.id) return storageService.put(EMAILS_KEY, email);
    else return storageService.post(EMAILS_KEY, email);
}

function getEmptyEmail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: + new Date(),
        to: '',
        from: '',
        stared: false,
        status: 'sent'
    };
}

function _createEmail(subject, body) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
    };
    return email;
}

function _setNextPrevEmailId(email) {
    return storageService.query(EMAILS_KEY).then(emails => {
        const emailIdx = emails.findIndex(currEmail => currEmail.id === email.id);
        email.nextEmailId = (emails[emailIdx + 1]) ? emails[emailIdx + 1].id : emails[0].id;
        email.prevEmailId = (emails[emailIdx - 1]) ? emails[emailIdx - 1].id : emails[emails.length - 1].id;
        return email;
    });
}
