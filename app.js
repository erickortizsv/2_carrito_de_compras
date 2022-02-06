//Se crea un array que va almacenar las frutas
const frutas = [];

//Se pide al usuario los nombres de las frutas y se almacenan en la variable fruta
const fruta = prompt('Feria Market ¿Que fruta desea comprar?');

//Con el metodo push agregamos al array frutas las frutas que ingresa el usuario
//y que se almacenan en la variable fruta
frutas.push(fruta);

//Consultamos al usuario si desea agregar otro elemento al carrito
while(confirm('Desea agregar otro elemento al carrito')){
  const fruta = prompt('¿Que fruta desea comprar?');
  frutas.push(fruta);
}



//Un simple texto
console.log('Compraste:');

//Se recorre el array frutas y se muestran las frutas que compro el usuario
for (const fruta of frutas){
  console.log(fruta);
}
