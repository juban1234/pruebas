function sortProductsByName(productos) {
    let orden = productos.sort((a, b) => a.name.localeCompare(b.name));
    return orden
  }
console.log(sortProductsByName(productos));


function sortProductsByName(productos) {
    productos.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // Sort the products array
  sortProductsByName(productos);
  
  // Function to print products in a structured format
  function printProducts(productos) {
    console.log("Productos ordenados alfabéticamente:");
    for (const producto of productos) {
      console.log(`SKU: ${producto.sku}`);
      console.log(`ID: ${producto.id}`);
      console.log(`Nombre: ${producto.name}`);
      console.log(`Precio: $${producto.price}`);
      console.log(`Cantidad: ${producto.quantity}`);
      console.log("-------------------"); // Separator line
    }
  }
  
  // Print the sorted products
  printProducts(productos);
  