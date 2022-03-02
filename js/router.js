import appsusApp from './pages/appsus-app.cmp.js';
import emailApp from './apps/misterEmail/pages/email-app.cmp.js';
import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
// import bookDetails from './pages/book-details.cmp.js';
// import bookDescription from './pages/book-description.cmp.js';

/* <appsus-app /> */


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
        path: '/email',
        component: emailApp
    },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
    // {
    //     path: '/book/descriction/:bookId',
    //     component: bookDescription
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});