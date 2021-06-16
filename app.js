
/////////////////////// 
/// Custom Element ///
//////////////////////

class ColContainer extends HTMLElement {

    constructor() {
        super(); // Prototype Chain (call it's parent constructor)

        const cols = this.querySelectorAll('div');
        this.style.display = 'grid';
        this.style.margin = '0 auto';
        this.style.width = 'clamp(320px, 80vw, 800px)';
        this.style.gridTemplateColumns = `repeat(${cols.length}, 1fr)`;
    }
}

window.customElements.define('col-container', ColContainer);

/////////////////////// 
////// Template //////
//////////////////////

// const template = document.querySelector('#text');
// document.body.appendChild(template.content);


/////////////////////// 
///// Shadow Dom /////
//////////////////////

// const root = document.querySelector('#shadow-root');
// root.attachShadow({ mode: 'open' });


// const text = document.createElement('p');
// text.textContent = 'Encore un example';

// const style = document.createElement('style');
// style.textContent = 'p {color : red}'

// root.shadowRoot.appendChild(text);
// root.shadowRoot.appendChild(style);

/////////////////////// 
//// All together ////
//////////////////////

const template = document.createElement('template');
template.innerHTML = `
    <style>
        h2 {
            color: deepblue;
        }

        p {
            color: grey;
        }

        div {
            padding: 1rem;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, .2);
        }
    
    </style>

    <div>
        <h2><slot name="title"></slot></h2>
        <p><slot name="content">My default text</slot></p>
    </div>

    <img></img>
`

class NewsArticle extends HTMLElement {

    constructor() {
        super(); 

        this.attachShadow({ mode : 'open' });
        // const root = this.shadowRoot

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
    }
}

window.customElements.define('news-article', NewsArticle);