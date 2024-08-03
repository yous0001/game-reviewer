//display data
//display details

async function getGames(category){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c67815b3d8mshed2de66a8928b04p19cbb4jsn83c3518bdaaf',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let response = await fetch(url, options);
    response=response.json()
    console.log(response);
    
}

async function getGameDetails(id){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c67815b3d8mshed2de66a8928b04p19cbb4jsn83c3518bdaaf',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let response = await fetch(url, options);
    response=response.json()
    console.log(response);
    
}
