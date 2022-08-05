# OccasionBike-verified

OccasionBike-verified es un proyecto creado en el bootcamp de Ironhack. La finalidad de este proyecto es poner en práctica lo aprendido en Javascript, MongoDB, Node.js,
Express.js, Handlebars, CSS... 

La aplicación consta de varias partes. Para tener una experencia correcta se debe seguir el siguiente flujo:

  1- Acceder al enlace de Register que se encuentra en el nav al acceder al home.
  
  2- Completar el registro que pide un email, un username y una contraseña.
    2.1- La contraseña debe contener al menos 1 mayúscula, 1 minúscula y 1 número.
    2.2- El nombre de usuario debe ser diferente de los ya existentes.
  
  3- Una vez completado el registro se redirige al usuario al login, donde debe loggearse con su username y contraseña.
    3.1- El username no es case sensitive además que puede haber un espacio al comienzo y al final del username.
    3.2- Si no se completa con éxito se muestra el tipo de error del usuario.
    
  4- Después el usuario es redirigido a su perfil donde puede ver las bicis que tiene a la venta, además tiene la opción de ver las bicis vendidas, las compradas, así como poner a la venta.
    4.1- En las bicis compradas se muestran solo las bicis compradas.
    4.2- En bicis vendidas se ven las que ya ha conseguido vender. En ambos casos se puede volver al perfil.
    4.3- La opción de vender una bici se materiliza tras rellenar un formulario con los datos necesarios.
    4.4- Adicional a lo anterior existe la posibilidad de borrar y actualizar la bici.
    
  5- En el apartado de bikes se pueden ver todas las bicis que los usuarios ponen a la venta.
  
  6- Al darle al botón para ver el detalle de la bici en cuestión se muestra en otra vista los detalles de dicha bici, así como varias opciones:
    6.1- En primer lugar tenemos la de comentar la bici. De la misma manera que borrar nuestros propios comentarios.
    6.2- En segundo lugar existe la posibilidad de acceder a hacer una transacción para comprar la bici.
    6.3- Si la bici es nuestra o ya está vendida no nos dejará comprarla.
    
  7- Al acceder a una transacción se actualiza el estado de las bicis del comprador y el vendedor.
  
  8- Por último, el enlace de logout cierra la sesión del usuario.
  
  OPCIÓN DE ADMIN: No obstante, cabe la posibilidad de que haya un admin. En cuyo caso se muestra un perfil con todos los usuarios disponibles. Al pincharse sobre
  ellos se da la opción de bannear y de desbannear si estaban banneados.
