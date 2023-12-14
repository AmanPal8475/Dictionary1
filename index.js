







async function wordformeaning(word){

        const val = word;
        const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+val+'&rapidapi-key=2b59ea750emsh00361f39c9c3dc8p17ccbdjsn06cea1da363b';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2b59ea750emsh00361f39c9c3dc8p17ccbdjsn06cea1da363b',
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            let string1 =  (result?.definition);
            let string2  =  string1.split(";",4);

            let ans = "";

            for(let i =0;i<string2.length;i++){
                ans = ans + "<br>" + i + "."+string2[i];
            }            
            document.getElementById("meen").innerHTML = ans;
        
            // document.getElementById("meen").innerHTML = string2[1];
            
        } catch (error) {
            alert("word not found")
            console.error(error);
        }
}

function findMeaning(){
    const word = document.querySelector(".wordformeaning").value;
    console.log(word);
    wordformeaning(word);

}

