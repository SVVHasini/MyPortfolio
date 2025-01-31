import './about.css';
export const About = () => {
    return (
        <div className="aboutpage">
            <div className="aboutcontainer">
                <div className="title">About me</div>
                <div className="description">I am a BTech CSE 3rd-year student passionate about technology and innovation. I enjoy working on real-world projects and continuously learning new concepts to enhance my problem-solving abilities. Currently, I am developing an online bookstore management system and a personal portfolio website. I strive to create impactful solutions and look forward to gaining industry experience through internships and collaborations.</div>
            </div>
            <hr />
            <div className='skillscontainer'>
                <div className='title'>Skills</div>
                <div className="skills">
                    <ul>
                        <li>
                            <div className="skillitem">
                                <div className="title">C++</div>
                                <div className="description">
                                I have a strong foundation in C++, with experience in object-oriented programming (OOP), data structures, and algorithms (DSA). I have worked on problem-solving, competitive coding, and implementing efficient algorithms, enhancing my logical thinking and coding proficiency.                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">Python</div>
                                <div className="description">
                                I have completed a **certification in Python**, gaining proficiency in **fundamentals, data structures, and problem-solving**. I have experience with **writing efficient code, automation, and basic data analysis**, further strengthening my programming skills.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">JavaScript</div>
                                <div className="description">
                                I have a strong grasp of JavaScript, focusing on DOM manipulation, event handling, and dynamic web development. I have worked with jQuery, Bootstrap, and interactive UI components, enhancing my ability to build responsive and user-friendly web applications.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">Html</div>
                                <div className="description">

                                I have a solid understanding of HTML, specializing in structuring web pages, semantic markup, and responsive design. I use it to create well-organized, accessible, and user-friendly websites as part of my web development projects.                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">CSS</div>
                                <div className="description">
                                I have a strong command of CSS, including layout design, styling, and creating responsive web pages. I am skilled in using Flexbox, Grid, and media queries to ensure websites are visually appealing and optimized for all devices. I focus on making websites both aesthetically pleasing and functional.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">Bootstrap</div>
                                <div className="description">
                                I have hands-on experience with Bootstrap, utilizing its responsive grid system and pre-built components to quickly design modern, mobile-first websites. I am adept at customizing themes and ensuring a seamless user experience across different devices using Bootstrap’s utility classes and components.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">GitHub</div>
                                <div className="description">
                                I am proficient in using GitHub for version control, having committed multiple projects to repositories. This includes managing code changes, collaborating on team projects, and utilizing Git for efficient tracking and sharing of code. It has helped me develop strong collaboration and project management skills.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">VS Code</div>
                                <div className="description">
                                I am proficient in using VS Code as my primary code editor. It offers a productive environment with useful extensions, syntax highlighting, debugging tools, and Git integration, which enhances my coding efficiency and workflow.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">Soft Skills</div>
                                <div className="description">
                                I possess strong problem-solving and communication skills, allowing me to effectively collaborate with teams and tackle challenges. I am adaptable, quick to learn new technologies, and manage time efficiently to meet deadlines. My ability to think critically and work both independently and in teams helps me achieve successful outcomes.                                 </div>
                            </div>
                        </li>
                        <li>
                            <div className="skillitem">
                                <div className="title">Problem-solving</div>
                                <div className="description">
                                I have strong problem-solving skills, enabling me to break down complex issues into manageable parts and devise efficient solutions. Through practice in competitive coding and algorithm design, I am able to approach problems logically, optimize performance, and deliver effective outcomes.                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='educontainer'>
                <div className='title'>Education</div>
                <div className="education">
                    <ul>
                        <li className='eduitems'>
                            <div className="title">10th</div>
                            <div className="description">I completed my 10th grade at St. Ann's School, Butchirajupalem, Visakhapatnam, with an 89% score. During this time, I developed strong foundational skills in mathematics and science, which sparked my interest in technology and problem-solving. This academic achievement laid the groundwork for my journey into the field of Computer Science Engineering, where I continue to build on the knowledge and skills I acquired. </div>
                            <a href="sample10th.pdf">view certificate</a>
                        </li>
                        <li className='eduitems'>
                            <div className="title">12th</div>
                            <div className="description">I completed my 12th grade at Sri Chaitanya Jr College, Butchirajupalem, Visakhapatnam, with a score of 9.06 in the MPC branch (Mathematics, Physics, Chemistry). This academic experience further honed my analytical skills and deepened my interest in science and technology, providing a strong foundation for my pursuit of Computer Science Engineering. </div>
                            <a href="sample10th.pdf">view certificate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}