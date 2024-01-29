function newLyweds(scientist, teacher) {

  scientist.love = teacher;
  teacher.love = scientist;
    
  return {
      boyfriend: scientist,
      bride: teacher
  };        
}

let familyaccident = newLyweds({ name: "Fernando II de Aragón", occupation: "Rey Católico" }, 
                               { name: "Isabel I de Castilla", occupation: "Reina" });

                         

console.log(familyaccident.boyfriend.love.name);


delete familyaccident.boyfriend;

console.log("\nAntes de la 'muerte':");
console.log("Novio:", familyaccident.boyfriend);
console.log("Novia:", familyaccident.bride);       

familyaccident.bride.birthday = "Marzo 10, 1452";
familyaccident.bride.contribution = "Apoyo a Cristóbal Colón y Américo Vespucio";

console.log("\nInformación adicional sobre Fernando II de Aragón:");
console.log("Nombre:", familyaccident.bride.name);
console.log("Fecha de nacimiento:", familyaccident.bride.birthday);
console.log("Contribución destacada:", familyaccident.bride.contribution);