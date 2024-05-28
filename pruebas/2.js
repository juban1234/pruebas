function getTotalQuantity(productos) {
    let totalQuantity = productos.reduce((acc, producto) => acc + producto.quantity, 0);
      return totalQuantity;
    }

console.log(getTotalQuantity(productos));