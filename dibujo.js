var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yI, yF;
var colorLinea = "white";

dibujarLinea(colorLinea, 0, 1, 300, 1); // Borde superior
dibujarLinea(colorLinea, 299, 0, 299, 300); // Borde derecho
dibujarLinea(colorLinea, 0, 299, 300, 299); // Borde inferior
dibujarLinea(colorLinea, 1, 0, 1, 300); // Borde izquierdo

dibujarCirculo("black", "red", 100, 120, 15, 0, 2*3.1416); // Circulo superior mochila
dibujarCirculo("black", "red", 100, 150, 15, 0, 2*3.1416); // Circulo inferior mochila
// Relleno mochila
for(l=0; l<30; l+=.5){
    yI = yF = l + 120;
    dibujarLinea("red", 85, yI, 100, yF);
}

dibujarCirculo("black", "red", 150, 100, 50, 3.1416, 2*3.1416); // Medio circulo cabeza
// Relleno cuerpo
for(l=0; l<80; l+=.5){
    yI = yF = l + 100;
    dibujarLinea("red", 101, yI, 199, yF);
}

dibujarCirculo("black", "red", 115, 200, 15, 0, 3.1416); // Medio circulo pata izquierda
dibujarCirculo("black", "red", 185, 200, 15, 0, 3.1416); // Medio circulo pata derecha
// Relleno pata izquierda
for(l=0; l<20; l+=.5){
    yI = yF = l + 180;
    dibujarLinea("red", 101, yI, 129, yF);
}
// Relleno páta derecha
for(l=0; l<20; l+=.5){
    yI = yF = l + 180;
    dibujarLinea("red", 171, yI, 199, yF);
}

dibujarCirculo("black", "lightblue", 140, 110, 20, 2*3.1416, 0*3.1416); // Circulo completo izquierdo visor
dibujarCirculo("black", "lightblue", 175, 110, 20, 2*3.1416, 0*3.1416); // Circulo completo derecho visor
// Relleno visor
for(l=0; l<40; l+=.5){
    yI = yF = l + 90;
    dibujarLinea("lightblue", 140, yI, 180, yF);
}

// Bordes sus
dibujarLinea("black", 100, 100, 100, 200); // Linea negra lateral izquierda
dibujarLinea("black", 200, 100, 200, 200); // Linea negra lateral derecha
dibujarLinea("black", 130, 180, 170, 180); // Linea interna horizontal
dibujarLinea("black", 130, 180, 130, 200); // Linea interna pata izquierda
dibujarLinea("black", 170, 180, 170, 200); // Linea interna pata derecha
dibujarLinea("black", 140, 90, 180, 90); // Linea visor superior
dibujarLinea("black", 140, 130, 180, 130); // Linea visor inferior
dibujarLinea("black", 85, 115, 85, 151); // Linea mochila izquierda


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCirculo(colorBorde, colorRelleno, xCentro, yCentro, radio, angInicial = 0, angFinal = 2*3.1416){
    lienzo.fillStyle = colorRelleno;
    lienzo.strokeStyle = colorBorde;
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.arc(xCentro, yCentro, radio, angInicial, angFinal);
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
}
