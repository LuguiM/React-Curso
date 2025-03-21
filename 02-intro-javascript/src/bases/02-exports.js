// Desestructuracion 
// // Asignacion Desectructurante

// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Iroman'
// };

// const { nombre, edad, clave } = persona;


// const useState = (valor) => {
//   return [valor, () => { console.log('Hola Mundo')}]
// }

// const [nombre, setNombre] = useState('Goku');

// console.log( nombre );
// setNombre();

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
  ];
  
  export const getHeroesById = (id) => {
     return heroes.find( heroe => {
      if(heroe.id === id){
        return heroe;
  
      };
     })
  }
  
//   console.log(getHeroesById(3));
  
  const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);
//   console.log(getHeroesByOwner('DC'));
  
  