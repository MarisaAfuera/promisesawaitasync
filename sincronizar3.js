let greetings = '';

function hello() { 
  return new Promise((resolve, reject) =>{    
      setTimeout(()=>{greetings = 'Buenos Días';
                      resolve();} , 1000 );
  });
} 

async function synchronize(){
    console.log ('1- Empieza'); 
    await hello();
    console.log ('2-', greetings);
    console.log ('3- Acaba');
}

synchronize();