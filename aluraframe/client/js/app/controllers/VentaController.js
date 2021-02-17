class VentaController {
    #fecha;
    #cantidad;
    #valor;
    #listaVentas;

    constructor() {
        let $ = document.querySelector.bind(document);
        this.#fecha = $('#fecha');
        this.#cantidad = $('#cantidad');
        this.#valor = $('#valor');
        this.#listaVentas = new ListaVentas();
    }

    agrega(event) {
        event.preventDefault();

        
                            
        this.#listaVentas.agrega(this.#creaVenta());
        //this.#listaVentas.listaVentas.push(this.#creaVenta());
        this.#limpiaFormulario();
        this.#listaVentas.listaVentas.length = 0;
        console.log(this.#listaVentas.listaVentas);

    }

    #creaVenta() {
        return new Venta(FechaHelper.textoParaFecha(this.#fecha.value),
                            this.#cantidad.value,
                            this.#valor.value);
    }

    #limpiaFormulario() {
        this.#cantidad.value = 0;
        this.#valor.value = '1';
        this.#fecha.value = '';

        this.#fecha.focus();
    }

}