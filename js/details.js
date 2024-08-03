import { displayGameDetails } from "./ui.js";

export class GameDetails{
    constructor(gameID){
        this.gameID=gameID
        this.getGameDetails(gameID)
        document.getElementById("close").addEventListener('click',()=>{
            $("#game-details").fadeOut(500,()=>{
                $("#games").fadeIn(500);
            });
        })
    }
    async getGameDetails(id){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c67815b3d8mshed2de66a8928b04p19cbb4jsn83c3518bdaaf',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let response = await fetch(url, options);
        response=await response.json()
        displayGameDetails(response);
        
    }
}