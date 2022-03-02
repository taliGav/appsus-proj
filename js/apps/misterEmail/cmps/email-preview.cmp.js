export default {

    props: ['email'],
    template: `
        <section class="email-preview">
            <p>{{email.from}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
            <!-- <p>{{getDate}}</p> -->
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
        co() {
            console.log(this.email);
        }
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
}