import './Landing.css'

const Landing = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h2 className="hero-greeting">Hi, I’m</h2>
                <h1 className="hero-title">Alvin Cortez</h1>
                <p className="hero-subtitle">An aspiring backend-stack developer crafting digital experiences</p>
                <div className="hero-actions">
                    <a href="#projects" className="hero-btn primary">Projects</a>
                    <a href="#contact" className="hero-btn secondary">Get in Touch</a>
                </div>
            </div>
        </section>
    )
}

export default Landing