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
                    <div className="title">Name</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt autem, sit reprehenderit amet, ratione voluptate quo fugiat perspiciatis soluta illum tenetur quibusdam totam! Excepturi beatae perspiciatis sit minima explicabo?</div>
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