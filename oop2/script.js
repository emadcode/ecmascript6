const person = {
    name: 'Emad',
    age: 22,
    job: 'Developer',
    address: {
      city: 'Egypt',
      country: 'cairo'
    }
  };
  
  const displayPersonInfo = ({ name, age, job, address: { city, country } }) => {
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
    console.log(`City: ${city}, Country: ${country}`);
  };
  
  displayPersonInfo(person);
  
  // Using rest operator and default values
  const { name: fullName, address: { city: town, state = 'Unknown' }, ...otherInfo } = person;
  
  console.log(fullName); // Emad
  console.log(town); // cairo
  console.log(state); // Unknown
  console.log(otherInfo); // { age: 22, job: 'Developer' }
  
