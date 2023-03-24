const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const apiKey = "xYqZ68hhVQDLJkWirjykPQ==yUnqSernIqUayYuk";

const options = {
    method : "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


 async function getjokes(){
    const response = await fetch(apiURL,options)
    const data = await response.json()


    jokeE1.innerText = data[0].joke;

    

    
}
btnE1.addEventListener("click",getjokes)