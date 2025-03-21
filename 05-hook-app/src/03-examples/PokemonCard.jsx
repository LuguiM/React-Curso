
export const PokemonCard = ({id, name, sprites = []}) => {
    return (
        <section style={{height: 200}}>
            <h2 className="text-capitalize">#{id} - {name}</h2>

            {/* imagenes */}
            <div>
                {
                    sprites.map(sprites => (
                        <img key={sprites} src={sprites} alt={name} />
                    ))
                }
            </div>
        </section>
    );
}