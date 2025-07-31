<h1> Repaso PHP</h1>

<?php 

echo "<h2>Hola PHP</h2>";

echo "<!--comentario en HTML-->"; #no Se muestra en el navegador porque es un comentario en HTML y php lo ignora

#variables 

$texto = "Repaso PHP para Master en Backend";

$textofinal =  "<p>" . $texto . "</p>";

echo $textofinal;
echo $textofinal;

$textofinal .= "Curso de PHP agregando texto a la variable";
echo $textofinal;


#GET variables que llegan desde la URL
if(isset($_GET["nombre"])){
    $nombre = $_GET["nombre"];
} else {
    $nombre = null;
}

//condiciones 
if($nombre !=null){
echo "<p>Nombre: " . $nombre . "</p>";
}else{
    echo "<p>No se ha enviado el nombre</p>";
}
echo mostrarNombre($nombre);

//Funciones
function mostrarNombre($nombre){
    $texto = "<h3>El nombre es: " . $nombre . "</h3>";
    return $texto;
}
?>