class Button extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["name", "image"];
    }
  
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }    
    
        attributeChangedCallback(pname, oldv, newv) {
        if(oldv !== newv){
          this[pname] = newv;
          this.render();
        }
      }
    
      connectedCallback() {
        this.render();
      }
  
  
      render(){
        this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/button/button.css">
         
          <button class="buttons"><img src="${this.image || ""}" height ="50" width="50"</button>
     
      `;
      }
      
}
  
  customElements.define("my-button", Button);
  
  export default Button;