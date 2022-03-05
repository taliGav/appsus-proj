import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailFolderList from "../cmps/email-folder-list.cmp.js";
import { eventBus } from "../../../service/eventBus-service.js";
import emailDetails from "./email-details.cmp.js";
import emailCompose from "./email-compose.cmp.js";



export default {
    template: `
        <section class="email-app page-height">
            <!-- <router-view></router-view> -->
        
            <email-folder-list @setFilterBy="getEmailsByStatus"/>
            <!-- <email-filter v-if="emailsForDisplay" @filtered="setFilter"/> -->
            <!-- <email-list v-if="emailsForDisplay" :emails="emailsForDisplay" @remove="deleteEmail" @toggleInfo="changeToggle"/> -->
            <!-- <email-details v-if="selectedEmail" :email="selectedEmail" @close="selectedEmail = null" /> -->
        </section>
        `,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: null,
        };
    },
    components: {
        emailFilter,
        emailList,
        emailDetails,
        emailCompose,
        emailFolderList
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails);
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        deleteEmail(emailId) {
            emailService.remove(emailId)
                .then(() => {
                    const idx = this.emails.findIndex((email) => email.id === emailId);
                    this.emails.splice(idx, 1);
                });
        },
        selectEmail(email) {
            this.selectedEmail = email;
        },
        sendMail(email) {
            this.emails.push(email);
        },
        changeToggle(email, info) {
            if (info === 'star') email.isStared = !email.isStared;
            else if (info === 'read') email.isRead = !email.isRead;
            else if (info === 'checked') email.isChecked = !email.isChecked;
            emailService.save(email);
        },
        getEmailsByStatus(status) {
            console.log(status);
            const emailsByStatus = this.emails.filter(email => email.status === status);
            console.log(emailsByStatus);
            eventBus.emit('getFilteredEmailsByStatus', emailsByStatus);
        }
    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            const regex = new RegExp(this.filterBy.textFilterd, 'i');
            return this.emails.filter(email => regex.test(email.body) || regex.test(email.subject) || regex.test(email.to));
        }
    },
};