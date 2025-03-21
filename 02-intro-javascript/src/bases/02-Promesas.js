import { getHeroesById } from "./bases/02-exports";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         // console.log(heroe);
//         resolve( heroe );
//     }, 2000);
// });

// promesa.then( (heroe)=> {
//     console.log('Then de la promesa', heroe);

// })
// .catch( err => console.warn(err));

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if (heroe) {
                resolve(heroe);
            }
            reject('No se pudo encontrar el heroe');
        }, 2000);
    });
}

getHeroesByIdAsync(10)
    .then(console.log)
    .catch( console.warn);