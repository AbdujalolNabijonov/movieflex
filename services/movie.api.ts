import {Movie} from "@/interfaces/interfaces";

const TMDB_CONFIG={
    BASE:"https://api.themoviedb.org/3",
    HEADERS:{
        accept:"application/json",
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

export class MovieService{
    serverApi
    constructor() {
        this.serverApi = TMDB_CONFIG.BASE
    }

    public async getMovies(query:string):Promise<Movie[]>{
        try{
            const endpoint = query?
                `${this.serverApi}/search/movie?query=${encodeURIComponent(query)}`:
                `${this.serverApi}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint,{
                method: "GET",
                headers:TMDB_CONFIG.HEADERS
            })
            if(!response.ok){
                //@ts-ignore
                throw new Error("Failed to get movies", response.statusText)
            }
            const data = await response.json()
            return data.results
        }catch (err:any){
            console.error(err)
            throw err
        }
    }
}