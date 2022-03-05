export default {

    // props: ['??'],
    template: `
        <section class="email-folder-list" >
            <router-link to="/email/compose" >
            <!-- @send="sendMail" -->
                <button>
                    <p>Create</p>        
                    <img  src="./css/img/writing-bw.png" alt="">
                    <img  src="./css/img/writing-clr.png" alt="">
                </button>
            </router-link>
            <router-link to="/email/inbox">
                <button>
                    <p>Inbox</p>
                    <img src="./css/img/inbox-bw.png" alt="drafts">
                    <img src="./css/img/inbox-clr.png" alt="drafts">
                </button>
            </router-link >
            <router-link to="/email/sent">
                <button>
                    <p>Sent</p>
                    <img src="./css/img/sent-bw.png" alt="drafts">
                    <img src="./css/img/sent-clr.png" alt="drafts">
                </button>
            </router-link >
            <router-link to="/email/drafts">
                <button>
                    <p>Drafts</p>
                    <img src="./css/img/drafts-bw.png" alt="drafts">
                    <img src="./css/img/drafts-clr.png" alt="drafts">
                </button>
            </router-link >
            <router-link to="/email/trash">
                <button>
                    <p>Trash</p>
                    <img src="./css/img/trash-bw.png" alt="drafts">
                    <img src="./css/img/trash-clr.png" alt="drafts">
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
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
}