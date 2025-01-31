import './footer.css';
import 'primeicons/primeicons.css';
export const Footer = () => {
    let items=[
        {icon:"pi-github",link:"https://github.com/SVVHasini"},
        {icon:"pi-linkedin",link:"https://www.linkedin.com/in/sanga-venkata-478b75274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
        {icon:"pi-instagram",link:"https://www.instagram.com/s_v_v_hasini?igsh=MXJwaWp6YmQzam56Zg=="},
        {icon:"pi-facebook",link:""}
    ]
    return (
        <div className='footer'>
            {
                items.filter((item)=>!!item.link).map((item,index)=><a href={item.link} target='_blank'><i key={index} className={`pi ${item.icon}`} ></i></a>)
            }
        </div>
    )
}