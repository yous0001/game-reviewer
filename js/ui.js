//display data
//display details

export function displayGames(games){
    let cartona=``
    games.forEach(game => {
        cartona+=`
                <div class="col">
                    <div class="item h-100 border border-main-color rounded-2 overflow-hidden">
                        <div class="item-body small p-3">
                            <div class="img mb-2">
                                <img class="w-100 rounded-2" src="${game.thumbnail}">
                            </div>
                            <div class="img-caption">
                                <div class="d-flex justify-content-between ">
                                    <h3 class="h6">${game.title}</h3>
                                    <p class="badge bg-primary p-2">Free</p>
                                </div>
                                <p class="small text-center opacity-50">
                                    ${game.short_description}</p>
                            </div>
                        </div>
                        <div class="item-footer d-flex justify-content-between p-1">
                            <span class="badge badge-color">${game.genre}</span>
                            <span class="badge badge-color">${game.platform}</span>
                        </div>
                    </div>
                </div>`
    });
    document.getElementById("games-row").innerHTML=cartona
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
