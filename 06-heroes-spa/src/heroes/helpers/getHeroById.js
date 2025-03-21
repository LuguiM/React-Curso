import { heroes } from "../data/heroes-with-desc"

export const getHeroByID = (id) => {
    return heroes.find(hero => hero.id === id)
}