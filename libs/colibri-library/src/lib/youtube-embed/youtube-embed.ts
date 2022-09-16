export class YoutubeEmbed extends HTMLElement {

    #shadowRoot;
    #width;
    #height;
    #id;
    #title;

    public static observedAttributes = ['title', 'id'];

    connectedCallback() {
        console.log('Appended and connected to document')
    }

    attributeChangedCallback(name: string, old: string, value: string) {
        console.log(`Element's attribute ${name} was ${old} and is now ${value}`);
        // this.innerHTML = `<h1>Welcome From ${this.title}!</h1>`;
        if (name === 'id') {
            this.#id = value;
        }
        if (name === 'title') {
            this.#title = value;
        }
        this.#shadowRoot.innerHTML = `
        <style>
                :host {
                    display: flex;
                    flex: 1;
                }
                html {
                    --youtube-embed-border-color: transparent;
                    --youtube-embed-border-width: 0px;
                    --youtube-embed-border-style: none;
                }
                .youtube-embed {
                    border: var(--youtube-embed-border-width) 
                            var(--youtube-embed-border-style) 
                            var(--youtube-embed-border-color);
                    width: 100%;
                    height: 405px;
                }
            </style>
        <iframe 
        class="youtube-embed"
        src="https://www.youtube.com/embed/${this.#id}?rel=0&ytp-pause-overlay=0" 
        title="${this.#title}"" 
        frameborder="0" allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen
        width="100%"
        height="405"
        >
    </iframe>`
    }

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: 'open' });

        this.#id = this.getAttribute('id');
        console.log(this.getAttributeNames());
        this.#title = this.getAttribute('title') || 'YouTube video player';

        this.#width = this.getAttribute('width') || '720';
        this.#height = this.getAttribute('height') || '405';


    }

}

customElements.define("youtube-embed", YoutubeEmbed);