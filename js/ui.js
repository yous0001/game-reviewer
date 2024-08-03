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


