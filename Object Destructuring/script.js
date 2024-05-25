    //Object Destructuring
    const person = { name: 'Emad', age: 22, job: 'Web Developer', adress:'cairo'};

    const { name, age, job,adress } = person;

    console.log(name); // Emad
    console.log(age); // 22
    console.log(job); // Web Developer
    console.log(adress);//cairo

    //The basic syntax for object destructuring involves using curly braces
    // {} on the left-hand side of an assignment 
    //to specify the properties you want to extract from an object.
