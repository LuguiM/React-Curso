import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "../components"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])  

    return (
        <div className=" mx-auto row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} 
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
