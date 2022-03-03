import { emailService } from "../service/email-service.service.js";

export default {

    // props: ['email'],
    template: `
        <section v-if="email" class="email-details">
            <p>{{email.from}}</p>
            <p>{{email.to}}</p>
            <p>{{email.sentAt}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <!-- <button @click="$emit('close')">back</button> -->
            <router-link to="/email">Return</router-link>
        </section>
        `,
    data() {
        return {
            email: null
        };
    },
    components: {
    },
    created() {
        console.log('this.$route is:', this.$route);
        const id = this.$route.params.emailId;
        emailService.get(id)
            .then(email => {
                this.email = email;
                this.email.isRead = true;
                emailService.save(this.email);
            });
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