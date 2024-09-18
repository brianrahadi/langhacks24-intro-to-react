export default function Header() {
    return (
        <header className="container" id="header">
            <div className="header--title">
                <p className="header--name">Sebastian Lee</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="mailto:sebastian.lee@gmail.com">Contact</a></li>
                    <li><a href="#" className="btn">View Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}