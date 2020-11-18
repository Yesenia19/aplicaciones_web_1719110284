function obtenerDatos()
{
  var cantidad_producto= $("#cantidad").val();
  var nombre_producto = $ ("#producto option:selected").text();
  var precio_producto = $ ("#producto").val();
  var contenido_producto= $ ("#carrito").val();

  if ( cantidad_producto < 10 & cantidad_producto > 0 & precio_producto > 0 )
    {
    $("#carrito").text("La cantidad del producto es: "+ cantidad_producto + "\t El producto es: " + nombre_producto +  "\tPrecio:$" + precio_producto + "\tEl total es de:$"+ parseFloat(cantidad_producto)*parseFloat(precio_producto)+"\n")
    }
  if ( cantidad_producto <=0 & precio_producto <=0 )
    {
    alert ( "Verifica que los campos esten correctamente llenados" )
    }
  if (cantidad_producto>=10 & precio_producto>0)
    {
    alert ("La cantidad de productos que puedes comprar es de 1 a 9")
    }
}