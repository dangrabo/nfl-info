export default function Card(props) {
  console.log(props.content)
    return (
        <section className="card">
            <img src={props.img.src} alt={props.img.alt} className="card-image" />
            <div>
              <h2> {props.title} </h2>
              <p> {props.subtitle} </p>
              <ul> {props.content.map(c => {
                    return (<li> {c} </li>)}
                    )}
              </ul>
            </div>
           
        </section>
    )
}