import Image from 'next/image';
import styles from "../../../styles/about.css";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="about-image">
                <Image 
                    src="/profile.JPG"
                    alt="Profile Picture"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="about-description">
                <div className="about-description_heading">
                    <h2>nice to meet you!</h2>
                </div>
                <div className="about-description_text">
                    <p>
                    I'm a full-stack software engineer studying at Atlas School in Tulsa, Oklahoma.
                    My background spans over ten years in customer service and more than three years in management and remote work, 
                    all while exploring different fields like nursing, political science, and communications.
                    </p>
                    <p>
                    Ultimately, my love for video games led me to discover a passion for technology, where I can solve real-world problems while staying engaged and creative.
                    I’ve gained skills in team-building, problem-solving, and technical proficiencies, including C, Python, HTML, CSS, and my current favorite—JavaScript.
                    I'm excited to combine my empathy, adaptability, and problem-solving skills with my technical expertise 
                    to collaborate with others who share a passion for using technology in aims to shape the future.
                    </p>
                    <p><b>Let's do it together!</b></p>
                </div>
            </div>
        </div>
    );
}