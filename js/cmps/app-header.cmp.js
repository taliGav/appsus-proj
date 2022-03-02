export default {
    template: `
    <header class="app-header flex space-between">
        <div class="logo">
            <router-link to="/">Appsus</router-link>
        </div>
        <nav class="nav-bar">
            <router-link to="/keep">Keep</router-link> |
            <router-link to="/email">Email</router-link> |
            <router-link to="/book">Books</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </header>
    `,

}