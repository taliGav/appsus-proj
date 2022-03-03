export default {

    props: ['email'],
    template: `
        <section class="email-preview">
            <p>{{email.from}}</p>
            <p>{{email.sentAt}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
        </section>
        `,
}