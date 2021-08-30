let greetings = '';

function hello() {      
    setTimeout(()=>{greetings = 'Buenos Días';}, 1000);  
}

function synchronize(){
    console.log ('1- Empieza');
    hello();
    console.log ('2-', greetings);
    console.log ('3- Acaba');
}

synchronize();
