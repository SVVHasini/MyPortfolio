import './footer.css';
import 'primeicons/primeicons.css';
export const Footer = () => {
    let items=[
        {icon:"pi-github",link:"www.github.com"},
        {icon:"pi-linkedin",link:"www.linkedin.com"},
        {icon:"pi-instagram",link:"www.instagram.com"},
        {icon:"pi-facebook",link:"www.facebook.com"}      
    ]
    return (
        <div className='footer'>
            {
                items.filter((item)=>!!item.link).map((item,index)=><i key={index} className={`pi ${item.icon}`}></i>)
            }
        </div>
    )
}