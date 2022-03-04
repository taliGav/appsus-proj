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
            isChecked: false,
            sentAt: +new Date() - 3600,
            to: 'momo@mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmomo.com',
            isStared: false,
        }, {
            id: 'e102',
            subject: 'spam!',
            body: 'githubbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            isRead: false,
            isChecked: false,
            sentAt: +new Date() - 3600 * 10,
            to: 'mimi@mimi.com',
            isStared: false,
        }, {
            id: 'e103',
            subject: 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!',
            body: 'alaska',
            isRead: false,
            isChecked: false,
            sentAt: 1645989216000,
            to: 'mama@mama.com',
            isStared: false
        }, {
            id: 'e104',
            subject: 'coco!',
            body: 'coco jambo',
            isRead: false,
            isChecked: false,
            sentAt: 1646162016000,
            to: 'mumu@mumu.com',
            isStared: false,
        }, {
            id: 'e105',
            subject: 'bye!',
            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            isRead: false,
            isChecked: false,
            sentAt: 747945115000,
            to: 'mlml@mlml.com',
            isStared: false,
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
