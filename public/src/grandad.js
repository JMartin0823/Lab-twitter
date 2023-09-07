import * as components from "./components/dad.js"
import data from "./data.js"
import data2 from "./data2.js"
import data3 from "./data3.js"
import data4 from "./data4.js"

class Principal extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.people =[];
        this.left=[];
        this.right=[];
        this.image2=[];
        var i=0
        while(i<data.length){
            this.people.push(data[i]);
            i++;
          }
        i=0
        while(i<data2.length){
            this.left.push(data2[i]);
            i++;
          }
          i=0
          while(i<data3.length){
            this.right.push(data3[i]);
            i++;
          }
          i=0;
          while(i<data4.length){
            this.image2.push(data4[i]);
            i++;
          }
        }


    connectedCallback()
    {
        this.render();
    }
  
    render()
    {

      this.left.forEach((button) => {
        this.shadowRoot.innerHTML += `
        <my-button name = "${button.name}" image ="${button.image}"></my-button>
        `           
    });

    this.right.forEach((bu) => {
      this.shadowRoot.innerHTML += `
      <section>
      <my-button2 
      name="${bu.name}" 
      name2="${bu.name2}" 
      name3="${bu.name3}"
      </my-button2>
      </section>
      `
    });

      this.shadowRoot.innerHTML += `
        <my-search></my-search>
        `

       this.people.forEach((person) => {
        this.shadowRoot.innerHTML += `
        <my-first name="${person.name}" username="${person.username}" description="${person.description}" profile="${person.profile}" image="${person.image}" image2="${person.image2}" image3="${person.image3}" image4="${person.image4}"></my-first>
        `
        });
      }
  
}
  customElements.define("p-container", Principal);