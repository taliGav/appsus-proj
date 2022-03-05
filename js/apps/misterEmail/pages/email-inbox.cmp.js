import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js"; export default {

    props: ['??'],
    template: `
<section class='m'>
    <email-filter v-if="emailsForDisplay" @filtered="setFilter"/>
    <email-list v-if="emailsForDisplay" :emails="emailsForDisplay" @remove="deleteEmail" @toggleInfo="changeToggle"/>
</section>
`,
    data() {
        return {
        };
    },
    components: {
        emailFilter,
        emailList,
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