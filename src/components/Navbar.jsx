import './Navbar.css'

const Navbar = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">AC</div>
                    <div className="nav-links">
                        <button className="nav-btn active" onClick={() => scrollToSection('home')}>Home</button>
                        <button className="nav-btn" onClick={() => scrollToSection('about')}>About</button>
                        <button className="nav-btn" onClick={() => scrollToSection('skills')}>Skills</button>
                        <button className="nav-btn" onClick={() => scrollToSection('projects')}>Projects</button>
                        <button className="nav-btn" onClick={() => scrollToSection('contact')}>Contact</button>
                    </div>
                    <div className="nav-actions">
                        <button className="resume-btn">Download CV</button>
                        <button className="theme-toggle" aria-label="Toggle dark mode">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" fill="#fff" />
                                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="#222" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar