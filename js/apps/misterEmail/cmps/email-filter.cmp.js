export default {

    props: ['??'],
    template: `
        <section class="email-filter">
            <label>
                <input @input="setFilter" type="text" v-model="filterBy.textFilterd" placeholder="Search">
            </label>
            <pre>{{filterBy}}</pre>
        </section>
        `,
    data() {
        return {
            filterBy: {
                textFilterd: '',
                from: '',
                subject: '',
                body: ''
            }
        };
    },
    components: {
    },
    created() {
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
}