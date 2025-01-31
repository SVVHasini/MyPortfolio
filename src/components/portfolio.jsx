import "./portfolio.css";
import { Slideshow } from "./slideshow";
export const Portfolio=()=>{
    return (
    <div className="portfoliopage">
        <div className="maintitle">Portfolio</div>
        <div className="description">
            <div className="projects">
                <span>Project</span> 
                <div className="projectcontainer">
                    <div className="title">Online Bookstore</div>
                    <div className="description">My College Books project is an online bookstore management system aimed at providing a seamless platform for buying and selling books. It includes features like user authentication, a contact page, and the ability to browse and order books. The project was built using HTML, CSS, JavaScript, Bootstrap, and jQuery for the front-end, focusing on user experience and design. Though it doesn't include backend development, it demonstrates my skills in front-end development and my ability to create a functional, interactive website. </div>
                    <a href="https://github.com/SVVHasini/Online-Bookstore" target="_blank">view project</a>
                </div>          
            </div>
            <hr />
            <div className="certifications">
                <span>Certifications</span>
                <Slideshow/>
            </div>
        </div>
    </div>
    )
}