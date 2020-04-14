//Creamos un custom elements se debe utilizar la sintaxis de ECS
//Heredamos la clase HTMLElement de la API DOM
class SaludoBasicoElement extends HTMLElement {
    constructor() {
            super();

            this.saludo = "Hi,I´m a Component";

        }
        //Usamos metodos para los eventos
        //cuando el componente se agregue al dom principal de la pagina la siguiente funcion se invoca 
    connectedCallback() {
            //Llamaremos al metodo de windows que nos devuelve un conenedor(.innerHTML) y le pasamod como valor el atributo saludo del constructor
            //Al utilizar el this hacemos referencia a la clase HTMLElement que trae todos los metodos incluido este
            this.innerHTML = this.saludo;

            //Misma funcion anterior, solo que pintamos en negrita nuestro componente
            let bold = document.createElement("strong");
            bold.innerHTML = this.saludo;
            this.appendChild(bold);

        }
        //Este callback se dispara cuando se modifique el comportamiento del atributo
    attributeChangedCallback


}

//Declaramos nuetra etiqueta/componente saludo- basico asociandola a nuestra clase creada para utilizarla en el index
window.customElements
    .define("saludo-basico", SaludoBasicoElement);