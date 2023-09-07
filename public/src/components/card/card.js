class Card extends HTMLElement{

    static get observedAttributes() {
      return ["name", "username", "description", "profile", "image", "count", "image2", "image3", "image4"];
    }
  
      constructor(){
          super();
          this.attachShadow({mode:"open"});
          this.onButtonClicked = this.onButtonClicked.bind(this);
      }
  
      connectedCallback() {
          this.render();
        }

        connectedCallback(){
          this.mount();
      }
      
      attributeChangedCallback(propName, oldValue, newValue){
          this[propName] = newValue;
          this.mount();
      }
      mount(){
          this.render();
          this.addEventListeners();
      }
      
      addEventListeners(){
          this.shadowRoot.querySelector("button")
          .addEventListener("click", this.onButtonClicked);
      }
      
      onButtonClicked(){
          const Value = Number(this.getAttribute("count")) || 0;
          this.setAttribute("count", Value + 1);
      }
  
        render(){
          this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/card/card.css">
            <link href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">


           <section class="todo">
            <section class="tweet-wrap">
              <section class="tweet-header">
                <img src="${this.profile}" alt="" class="avator">
                <section class="tweet-header-info">
                ${this.name} <span>${this.username}</span><span>. Mar 10
            </span>
                  <p>${this.description}</p>
                </section>

              </section>
              <section class="tweet-img-wrap">
                <img src="${this.image}" alt="" class="tweet-img">
              </section>
              <label class="pepe">
              <button><img src="${this.image2}" height ="30" width="30"</button>
                <p>${this.count || 0}</p>
                <button><img src="${this.image3}" height ="30" width="30"</button>
                
                <button><img src="${this.image4}" height ="30" width="30"</button>
              </label>
              </section>
        `;
        }
        
  }
  
  customElements.define("my-first", Card);
  
  export default Card;
  