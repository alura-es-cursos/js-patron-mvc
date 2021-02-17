class VentaController {
    #fecha;
    #cantidad;
    #valor;
    #listaVentas;
    #ventasView;

    constructor() {
        let $ = document.querySelector.bind(document);
        this.#fecha = $('#fecha');
        this.#cantidad = $('#cantidad');
        this.#valor = $('#valor');
        this.#listaVentas = new ListaVentas();
        this.#ventasView = new VentasView($('#VentasView'));

        this.#ventasView.update(this.#listaVentas);
    }

    agrega(event) {
        event.preventDefault();

        
                            
        this.#listaVentas.agrega(this.#creaVenta());
        this.#ventasView.update(this.#listaVentas);
        this.#limpiaFormulario();


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