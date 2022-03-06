import emailFilter from "./email-filter.cmp.js";
import emailList from "./../cmps/email-list.cmp.js";

import { emailService } from "../service/email-service.service.js";
import { eventBus } from './../../../service/eventBus-service.js';


export default {
    props: ['emails'],
    template: `
        <section class='m-trash'>
            <email-filter v-if="emails" @filtered="setFilter"/>
            <email-list v-if="emails" :emails="emailsForDisplay"  @remove="deleteEmail" @toggleInfo="changeToggle"/>
        </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null,
        };
    },
    components: {
        emailFilter,
        emailList,
    },
    created() {
        console.log('email-trash');
        this.unsubscribe = eventBus.on('getFilteredEmailsByStatus', this.emailsData);
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

        emailsData(data) {
            this.emails = data;
        },
        deleteEmail(emailId) {
            emailService.remove(emailId)
                .then(() => {
                    const idx = this.emails.findIndex((email) => email.id === emailId);
                    this.emails.splice(idx, 1);
                });
        },
        changeToggle(email, info) {
            if (info === 'star') email.isStared = !email.isStared;
            else if (info === 'read') email.isRead = !email.isRead;
            else if (info === 'checked') email.isChecked = !email.isChecked;
            emailService.save(email);
        },

    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            const regex = new RegExp(this.filterBy.textFilterd, 'i');
            return this.emails.filter(email => regex.test(email.body) || regex.test(email.subject) || regex.test(email.to));
        }
    },
    mounted() {
    },
    unmounted() {
        this.unsubscribe();
    }
};