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
    },
    methods: {
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
}