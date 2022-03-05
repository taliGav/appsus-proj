export default {

    // props: ['??'],
    template: `
        <section class="email-folder-list" >
            <router-link to="/email/compose" >
            <!-- @send="sendMail" -->
                <button>
                    <p>Create</p>        
                    <img  src="./css/img/writing-bw.png" alt="Create">
                    <img  src="./css/img/writing-clr.png" alt="Create">
                </button>
            </router-link>
            <router-link to="/email/inbox" @click="setFilterBy('Recived')">
                <button>
                    <p>Inbox</p>
                    <img src="./css/img/inbox-bw.png" alt="Inbox">
                    <img src="./css/img/inbox-clr.png" alt="Inbox">
                </button>
            </router-link >
            <router-link to="/email/sent" @click="setFilterBy('Sent')">
                <button>
                    <p>Sent</p>
                    <img src="./css/img/sent-bw.png" alt="Sent">
                    <img src="./css/img/sent-clr.png" alt="Sent">
                </button>
            </router-link >
            <!-- <router-link to="/email/stared" @click="setFilterBy('Stared')">
                <button>
                    <p>Stared</p>
                    <img src="./css/img/star-bw.png" alt="Star">
                    <img src="./css/img/star-clr.png" alt="Star">
                </button>
            </router-link > -->
            <router-link to="/email/drafts" @click="setFilterBy('Drafts')">
                <button>
                    <p>Drafts</p>
                    <img src="./css/img/drafts-bw.png" alt="Drafts">
                    <img src="./css/img/drafts-clr.png" alt="Drafts">
                </button>
            </router-link >
            <router-link to="/email/trash" @click="setFilterBy('Trash')">
                <button>
                    <p>Trash</p>
                    <img src="./css/img/trash-bw.png" alt="Trash">
                    <img src="./css/img/trash-clr.png" alt="Trash">
                </button>
            </router-link >
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
        setFilterBy(filter) {
            this.$emit('setFilterBy', filter);
        }
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
}