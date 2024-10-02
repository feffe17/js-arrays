const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = teachers
for (let i = 0; i < teachers.length; i++) {
  if(teachers[i].length < 5){
    longNames.splice(i , 1)
  }  
}

console.log(longNames);



// 3. Rimuovi 'Ed' dall'array teachers
const rimozione = teachers.indexOf("Ed");
if(rimozione !== -1){
  teachers.splice(rimozione , 1);
}

console.log(teachers);
