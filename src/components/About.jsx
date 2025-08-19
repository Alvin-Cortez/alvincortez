import './About.css';
import avatar from "../assets/avatar.jpg";
import pupLogo from "../assets/PUPLogo.png";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-avatar">
                    <img src={avatar} alt="Alvin Cortez Graduation" className="avatar-img" />
                </div>
                <div className="about-details">
                    <div className="about-header">
                        <img src={pupLogo} alt="PUP Logo" className="pup-logo" />
                        <div className="about-title">
                            <h3>Bachelor of Science in Information Technology</h3>
                            <p>Polytechnic University of the Philippines &bull; 2025</p>
                        </div>
                    </div>
                    <p className="about-desc">
                        I’m Alvin Cortez, a BSIT student and web developer passionate about creating modern, user-friendly websites and applications. Skilled in both front-end and back-end development, I focus on clean design and efficient functionality. Currently seeking opportunities to apply my skills and grow in real-world projects.
                    </p>
                    <div className="about-stats">
                        <div className="stat-card">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-7V7h2v6h-2zm0 4v-2h2v2h-2z" fill="#222"/></svg>
                            <span>1+ Years<br />experience</span>
                        </div>
                        <div className="stat-card">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2l4 4-4 4-4-4 4-4zm0 8v12" stroke="#222" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="18" r="2" fill="#222"/></svg>
                            <span>3 Completed<br />projects</span>
                        </div>
                        <div className="stat-card">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z" fill="#222"/></svg>
                            <span>7<br />Technologies</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About