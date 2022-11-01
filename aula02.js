const precoGasolina = 5.79;
const precoEtanol = 4.59;
let tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
let distanciaKm = 100;

if (tipoCombustivel === 'Etanol'){
    mediaDeConsumo = (distanciaKm / kmPorLitros) * precoEtanol;

    console.log(mediaDeConsumo);

} else {
    mediaDeConsumo = (distanciaKm / kmPorLitros) * precoGasolina;

    console.log(mediaDeConsumo);
}