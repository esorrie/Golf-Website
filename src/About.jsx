import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="IntroContainer">
            <div className="Title">About Me</div>
            {/* <div>
                Maybe adding a photo
            </div> */}
            <div className="Intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
                nisi arcu. Nunc sapien nisi, interdum ut porttitor sed,
                fringilla ac urna. Mauris lacinia neque enim, eget tempor purus
                auctor a. Proin tempus, ante at ornare viverra, risus sapien
                lobortis ligula, non venenatis mauris erat vel augue. Donec at
                eros odio. Aliquam ut commodo sapien. Suspendisse euismod, massa
                et dignissim viverra, libero leo malesuada sem, vel faucibus
                sapien risus nec massa.
            </div>

            <div className="QualTitle">
                <div className="quals"> Qualifications </div>
                <div> *** </div>
                <div> *** </div>
                <div> *** </div>
                <div> *** </div>
            </div>
        </div>
    );
};
export default About;
