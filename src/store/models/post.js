export default class Post {
    constructor(title, content, author, id) {
        let today = new Date();
        today.setHours(today.getHours() + 9);
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdate = today.toISOString().replace('T', ' ').substring(0, 19);
    }
}