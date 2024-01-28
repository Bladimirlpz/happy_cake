import './home.css'
import torta2 from '../assets/torta2.jpg'

function Home() {
    return (
        <section className="home">
            <h1>Bienvenido a Happy Cake</h1>
            <h3>El lugar de los pasteles felices</h3>
            <img src={torta2} />

        </section>
    )
}

export default Home