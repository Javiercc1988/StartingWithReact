
export const PokemonCard = ({id, name, sprites = []}) => {

    console.log("sss", sprites)
  return (
    <>
    
    <section>
    <h2 className="text-capitalize">#{id} - {name}</h2>
    </section>
    <div>
        <img src={sprites.back_default} alt="" />
    </div>
    
    </>
  )
}
