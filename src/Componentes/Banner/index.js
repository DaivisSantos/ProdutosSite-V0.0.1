import './Banner.css'


function Banner () {
    return (
        <section className='banner'>
            <nav className='menuNav'>
                <ul>
                    <li><img src='./home.svg' alt='home'/>Home</li>
                    <li><img src='./icons8-bolsa-32.png' alt='bolsa'/>Produtos</li>
                    <li><img src='./lupa.svg' alt='lupa'/>Pesquisa</li>
                </ul>
            </nav>
            <div className='titulo'>
                ProdutosSite
            </div>
        </section>
    )
}

export default Banner;