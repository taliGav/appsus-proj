import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetails from "./email-details.cmp.js";



export default {

    props: ['??'],
    template: `
        <section class="email-app">
            helllooo
        </section>
        `,
    data() {
        return {
        };
    },
    components: {
        emailFilter,
        emailList,
        emailDetails
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
};