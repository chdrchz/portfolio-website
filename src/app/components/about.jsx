import Image from 'next/image';
import styles from "../../../styles/about.css";

export default function About() {
    return (
        <div className="about">
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
                        Sed lacinia diam eget ex pharetra, at malesuada metus malesuada. 
                        Nam tincidunt risus a mauris vehicula, vel interdum ligula porttitor. 
                        Integer nec dolor viverra, vehicula erat non, volutpat purus. 
                        Aliquam tincidunt urna euismod sem tincidunt fermentum.
                    </p>
                </div>
            </div>
        </div>
    );
}