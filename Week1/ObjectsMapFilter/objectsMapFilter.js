const data = [
    {
        name: "robert",
        age: "29",
        residence: "amsterdam",
        siblings: 1,
        work: {
            title: "Lecturer",
            employer: "Hogeschool van Amsterdam"
        }
    },
    {
        name: "berend",
        age: "32",
        residence: "rotterdam",
        siblings: 0,
        work: {
            title: "Front-end Developer",
            employer: "DEPT"
        }
    },
    {
        name: "ubaida",
        age: "26",
        residence: "Amersfoort",
        siblings: 4,
        work: {
            title: "Project Manager",
            employer: "Clarify"
        }
    }
];



/* Filter by age, normalize capitals in names, convert ages to numbers, remove work.
    const data = [
        {
            name: "Robert",
            age: 29,
            residence: "Amsterdam",
        },
        {
            name: "Berend",
            age: 32,
            residence: "Rotterdam",
        }
    ];
*/

// hulpfunctie die objecten uit array data transformeret naar het gewenste formaat
// en het object teruggeeft

function transformPerson(myPerson) {
    return myPerson.map(person => ({
        name: person.name.charAt(0).toUpperCase() + person.name.slice(1),
        age: Number(person.age),
        residence: person.residence.charAt(0).toUpperCase() + person.residence.slice(1),    
    }));
}
const updatedData = transformPerson(data); 
console.log(updatedData);

// Toon Berend in de console
console.log(updatedData[1]);


// Transformeer het hele array


// Toon personen ouder dan 26
