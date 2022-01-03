const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest, current) => {
        if(!oldest.hasOwnProperty('yearOfDeath')) oldest['yearOfDeath'] = new Date().getFullYear();
        if(!current.hasOwnProperty('yearOfDeath')) current['yearOfDeath'] = new Date().getFullYear();
        let oldestYearsLived = oldest.yearOfDeath - oldest.yearOfBirth;
        console.log("Oldest " + oldest.name + oldestYearsLived);
        let currentYearsLived = current.yearOfDeath - current.yearOfBirth;
        console.log("Current " + current.name + currentYearsLived);
        return oldestYearsLived > currentYearsLived ? oldest : current;
    });
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    //   yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

  console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
