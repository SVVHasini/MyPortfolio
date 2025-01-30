import './contact.css';
export const Contact=()=>{
    return(
        <div className="contactpage">
            <div className="title">Contact me</div>
            <form>
                
                <div className="fields">
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className="fields">
                    <label>Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
        
    )
}