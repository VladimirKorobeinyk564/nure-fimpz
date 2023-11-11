function Home() {

    return (
        <div className="h-[100vh] bg-home-bg-dark bg-cover bg-center relative">
            <div className="promo-block w-full px-[60px] text-center text-dark-text-color absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className={'text-[55px] font-extrabold leading-[60px] mb-[20px]'}><span className={'bg-home-tagline-gradient bg-clip-text text-transparent'}>ФОРМАЛЬНІ</span> МЕТОДИ<br /> ІНЖЕНЕРІЇ ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ</h1>
                <p className={'mb-[50px] text-dark-subtext-color text-[18px]'}>Вивчайте ключові методи моделювання, розробки та верифікації складних програмних продуктів <br/>для надійних та безпечних рішень.</p>
                <button>Click me</button>
            </div>
        </div>
    );
}

export default Home;