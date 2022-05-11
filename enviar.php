<?php 
    $destino= "Academicos@udg.com.mx";
    $nombre= $_POST["nombre"];
    $correo= $_POST["correo"];
    $telefono= $_POST["telefono"];
    $mensaje= $_POST["asunto"];
    $contenido= "nombre: " . $nombre . "\ncorreo" . $correo . "\ntelefono" . $telefono . "\nasunto" .$mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location:enviadoConExito.html");

?>