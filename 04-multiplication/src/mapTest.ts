// Definimos una interfaz para los productos
interface Product {
    id: number;
    name: string;
    quantity: number;
}

// Creamos un Map para almacenar productos
const inventory: Map<number, Product> = new Map();

// Función para agregar un producto al inventario
function addProduct(id: number, name: string, quantity: number): void {
    if (inventory.has(id)) {
        console.log(`El producto con ID ${id} ya existe. Actualizando la cantidad.`);
        const existingProduct = inventory.get(id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
            inventory.set(id, existingProduct);
        }
    } else {
        const newProduct: Product = { id, name, quantity };
        inventory.set(id, newProduct);
        console.log(`Producto agregado: ${name} (ID: ${id}, Cantidad: ${quantity})`);
    }
}

// Función para eliminar un producto del inventario
function removeProduct(id: number): void {
    if (inventory.delete(id)) {
        console.log(`Producto con ID ${id} eliminado.`);
    } else {
        console.log(`No se encontró el producto con ID ${id}.`);
    }
}

// Función para mostrar todos los productos en el inventario
function displayInventory(): void {
    console.log("Inventario:");
    inventory.forEach((product) => {
        console.log(`ID: ${product.id}, Nombre: ${product.name}, Cantidad: ${product.quantity}`);
    });
}

// Función principal para gestionar el inventario
function main(): void {
    // Agregamos algunos productos al inventario
    addProduct(1, "Manzanas", 50);
    addProduct(2, "Naranjas", 30);
    addProduct(1, "Manzanas", 20); // Actualiza la cantidad de manzanas
    addProduct(3, "Plátanos", 15);

    // Mostramos el inventario
    displayInventory();

    // Eliminamos un producto
    removeProduct(2);
    
    // Mostramos el inventario después de la eliminación
    displayInventory();
}

// Ejecutamos la función principal
main();