function productosDescuento() {
    let descuento = productos.filter(producto => producto.price >= 35) || productos.filter(producto =>producto.price <= 80);
    return descuento ;
}

console.log(productosDescuento(productos));