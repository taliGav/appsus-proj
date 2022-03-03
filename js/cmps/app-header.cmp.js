export default {
    template: `
    <header class="app-header flex space-between align-center">
            <router-link class="logo flex" to="/">
                <h2>Appsus</h2>
                <img src="./css/img/pagsus-clr.png" alt="logo">
            </router-link>
            <nav class="nav-bar">
                <img src="./css/img/dots.png" alt="logo">
                    <router-link  to="/keep"class="keep-link">
                        <img src="./css/img/keep-bw.png" alt="logo">
                        <img src="./css/img/keep-clr.png" alt="logo">
                        Keep
                    </router-link> |
                    <router-link to="/email" class="email-link">
                        <img src="./css/img/email-bw.png" alt="logo">
                        <img src="./css/img/email-clr.png" alt="logo">
                        Email
                    </router-link> |
                    <router-link to="/book" class="books-link">
                        <img src="./css/img/books-bw.png" alt="logo">
                        <img src="./css/img/books-clr.png" alt="logo">
                        Books
                    </router-link> |
                    <router-link to="/about" class="about-link">
                        <img class="about-img" src="./css/img/about-bw.png" alt="logo">
                        <img class="about-img" src="./css/img/about-clr.png" alt="logo">
                        About
                    </router-link>
        </nav>
    </header>
    `,

}