let producto = {
    nombre: "Laptop",
    marca: "Dell",
    precio: 1200,
    disponible: true,
    especificaciones: ["8GB RAM", "256GB SSD", "Intel Core i5"]
  };
  
  const verificar = producto.especificaciones.find(especificacion => especificacion.toLowerCase() === "intel core i5");
  
  const { nombre, marca, precio, disponible, especificaciones } = producto;
  
  console.log(verificar); 

console.log(`nombre: ${nombre}, marca: ${marca}, precio: ${precio}, disponible: ${disponible}, especificaciones: ${especificaciones}`);
