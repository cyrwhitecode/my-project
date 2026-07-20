import './Footer.css'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

export const Footer = () => {

    return (
        <div className='mainFoot'>
            <div className='footer'>
                <section className='items'>
                    <h4>Contacts</h4>
                    <div className="subItems">
                        <p>White Coffee Melen-38c Yaounde</p>
                        <p>+237 6 92 64 08 82/ 6 21 68 69 02 </p>
                        <p className='mail'>whitecoffee07@gmail.com</p>
                        <p>Schedule// 8AM - 18PM</p>
                    </div>
                </section>
                <section className='items'>
                    <h4>Payements</h4>
                    <div className="subItems">
                        <p>OM / MoMo / VISA / Cash</p>
                        <p>Fast Delivery service</p>
                    </div>
                </section>
                <section className='items'>
                    <h4>Social Medias</h4>
                    <div className='medias'>
                        <img className='ico' src={Instagram} alt="instaLogo" />
                        <img className='ico' src={Linkedin} alt="linkedinLogo" />
                        <img className='ico' src={Twitter} alt="twitLogo" />

                    </div>
                </section>
                
            </div>
            <div className='copyrights'>
                <code className='privacy'>Privacy Policy</code>
                <code>Copyright WC- 2026</code>
            </div>
        </div>
    )
}


