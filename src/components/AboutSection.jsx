import ProfileImg from '../assets/profile.jpg'

export default function AboutSection() {
    return (
        <section className="content-container" id="about">
            <div className="about--content">
                <h2>About Me</h2>
                <p>Hey there, my name is Sebastian Lee (he/him) and I am a software systems student at <a
                    href="https://langara.ca">Langara College.</a> I have always been fascinated by technology and its potential to make a positive
                    impact on
                    the
                    world.
                    My goal is to use my skills and knowledge to develop innovative solutions that can improve people's
                    lives! I
                    am dedicated to building high-quality products that help make the world a better place. To do this,
                    I have
                    completed <a href="#projects">various projects</a> that solve real-world problems.</p>
            </div>
            <img src={ProfileImg} alt="Sebastian Lee's Profile Image" />
        </section>
    )
}