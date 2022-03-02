import bookApp from "./pages/book-app.cmp.js";
import appHeader from "./cmps/app-header.cmp.js";
import appFooter from "./cmps/app-footer.cmp.js";
import homePage from "./pages/home-page.cmp.js";
import aboutPage from "./pages/about-page.cmp.js";
import bookDetails from "./pages/book-details.cmp.js";


const options = {
    template: `
        <section>
            <app-header/>
            <router-view/>
            <app-footer/>
        </section>
`,
    components: {
        bookApp,
        appHeader,
        appFooter
    }
};

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }
];

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});

const app = Vue.createApp(options);
app.use(router)
app.mount('#app');