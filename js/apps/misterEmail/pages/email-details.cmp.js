import { emailService } from "../service/email-service.service.js";

export default {

    // props: ['email'],
    template: `
        <section class="email-details">
            <p>{{email.from}}</p>
            <p>{{email.to}}</p>
            <p>{{email.sentAt}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <!-- <button @click="$emit('close')">back</button> -->
            <!-- <router-link to="/email">Return</router-link> -->
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
    // created() {
    //     console.log('this.$route is:', this.$route);
    //     const id = this.$route.params.bookId;
    //     bookService.get(id)
    //         .then(book => this.book = book);
    // },
    methods: {
    },
    computed: {

    },
    mounted() {
        
    },
    unmounted() {
    }
};