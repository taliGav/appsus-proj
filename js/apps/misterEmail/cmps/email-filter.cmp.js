export default {

    template: `
        <section class="email-filter">
            <label>
                <input @input="setFilter" type="text" v-model="filterBy.textFilterd" placeholder="Search">
            </label>
        </section>
        `,
    data() {
        return {
            filterBy: {
                textFilterd: '',
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};
