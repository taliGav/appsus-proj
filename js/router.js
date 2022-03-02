import appsusApp from './pages/appsus-app.cmp.js';
import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import keepApp from './apps/missKeep/pages/keep-app.cmp.js';
import emailApp from './apps/misterEmail/pages/email-app.cmp.js';
import bookApp from './apps/missBook/pages/book-app.cmp.js';
import bookDetails from './apps/missBook/pages/book-details.cmp.js';

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
        path: '/appsusMain',
        component: appsusApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp
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

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});