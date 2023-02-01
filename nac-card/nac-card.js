import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { config } from './nac-card.config'

export default class MyCard extends LitElement {
    static properties = {
        name: { type: String },
        cardtext: { type: String },
        imageUrl: { type: String },
        link: { type: String },
    };

    static getMetaConfig() {
        return config;
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <div class="card" style="width: 18rem;">
                <img src="${this.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.cardtext}</p>
                <a href="${this.link}" class="btn btn-primary">Link</a>
            </div>`;
    }

    constructor() {
        super();
    }
}

const elementName = 'my-card';
customElements.define(elementName, MyCard);