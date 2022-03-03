import { emailService } from "../service/email-service.service.js";

export default {

    props: ['email'],
    template: `
        <section class="email-details">
            <p>{{email.from}}</p>
            <p>{{email.to}}</p>
            <p>{{email.sentAt}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <button @click="$emit('close')">back</button>
        </section>
        `,
    data() {
        return {
        };
    },
    components: {
    },
    created() {
        this.email.isRead = true;
        emailService.save(this.email);
    },
    methods: {
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
};