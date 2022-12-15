const producto = {
    nombre: 'Jean',
    Apellido: 'Blanco',
    Cargo: 'Developer'
}
// Agregar nuevas propiedades
producto.imagen = 'imagen jpg';

// Eliminar propiedades del objeto
delete producto.Apellido;

console.log(producto);