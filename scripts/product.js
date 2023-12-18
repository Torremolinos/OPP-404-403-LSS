// bucle iterativo para meterlo en el local storage.
export class Product{
    #id;
    #nombre;
    #cantidad;
    #precio;

    constructor(id, nombre, cantidad, precio){
        this.#id = id;
        this.#nombre = nombre;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }
    
    toJSON() {  //transformar los objetos a JsonObject me salvo la vida.
        return {
            id: this.#id,
            nombre: this.#nombre,
            cantidad: this.#cantidad,
            precio: this.#precio
        };
    }

    get id(){
        return this.#id;
    }
    set id(id){
        this.#id = id;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get cantidad(){
        return this.#cantidad;
    }
    set cantidad(cantidad){
        this.#cantidad = cantidad;
    }
    get precio(){
        return this.#precio;
    }
    set precio(precio){
        this.#precio = precio;
    }

    showProduct(){
        //console.table.
        //la clase local storage es una instancia que produce de uno a uno
        console.log(`ID: ${this.#id} Nombre: ${this.#nombre} Cantidad: ${this.#cantidad} Precio: ${this.#precio}`);
    }
    
}