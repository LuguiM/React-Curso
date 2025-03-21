import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())

        // Todo: realizar peticion http

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        // console.log(data);
        

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}
