const producto = '      Monitor de 40 pulgadas    ';
console.log(producto);
console.log(producto.length);

//eliminar especio en el inicio
console.log(producto.trimStart());

//eliminar espacio al final
console.log(producto.trimEnd());
console.log(producto.trimStart().trimEnd());

//para eliminar especio en ambas partes 
console.log(producto.trim());

//eliminar espacio