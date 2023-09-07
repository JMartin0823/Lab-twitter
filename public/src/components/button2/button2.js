class Button2 extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["name", "name2", "name3"];
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
          <link rel="stylesheet" href="./src/components/button2/button2.css">
          <section>
          <h1>¿Eres nuevo en Twitter?</h1>
          <p>Regístrate ahora para obtener tu propia cronología personalizada.</p>
          <p>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</p>
          <button  class="about">${this.name || "a"}</button>
          <button  class="about2"> ${this.name2 || "a"} </button>
          <button  class="about3"> ${this.name3 || "a"} </button>
          </section>
      `;
      }
      
}
  
  customElements.define("my-button2", Button2);
  
  export default Button2;