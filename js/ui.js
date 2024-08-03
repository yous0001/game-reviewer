//display data
//display details

export function displayGames(games){
    let cartona=``
    games.forEach(game => {
        cartona+=`
                <div class="col">
                    <div class="item h-100 d-flex flex-column justify-content-between border border-main-color rounded-2 overflow-hidden" id="${game.id}">
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

export function displayGameDetails(game){
    let cartona=`
        <div class="col-md-4">
                    <img src="${game.thumbnail}" class="w-100" alt="">
                </div>
        <div class="col-md-8">
            <h3>Title: ${game.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
            <p class="small">${game.description}</p>
            <a class="btn btn-outline-warning" target="_blank"
                href="${game.game_url}">Show Game</a>
        </div>
    `
    document.getElementById("game-details-row").innerHTML=cartona
}
