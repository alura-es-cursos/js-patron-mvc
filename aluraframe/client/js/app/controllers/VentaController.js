class VentaController {
    #fecha;
    #cantidad;
    #valor;

    constructor() {
        let $ = document.querySelector.bind(document);
        this.#fecha = $('#fecha');
        this.#cantidad = $('#cantidad');
        this.#valor = $('#valor');
    }

    agrega(event) {
        event.preventDefault();

        let fechaForma = new Date(...this.#fecha.value.split('-')
                                    .map((item,index) => (index==1)?item-1:item));
        console.log(fechaForma);

        /*let venta = new Venta(this.#fecha,
                            this.#cantidad,
                            this.#valor);
                            
        console.log(venta);*/
    }

}