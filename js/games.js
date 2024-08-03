import { displayGames } from "./ui.js";

export class Games{
    constructor(category){
        this.getGames(category)      
    }
    async getGames(category){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c67815b3d8mshed2de66a8928b04p19cbb4jsn83c3518bdaaf',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let response = await fetch(url, options);
        response=await response.json()
        displayGames(response);
        
        
    }
}