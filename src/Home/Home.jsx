import './Home.css'
import { useAuth } from '../hook/UseAuthTemp.jsx'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const bestSellers = [
        {'id': 1, 'name': 'Mocha', 'price': 2000, 'image': '/cafe/mocha.jpg'},
        {'id': 2, 'name': 'Espresso', 'price': 1500, 'image': '/cafe/espres_a.jpg'},
        {'id': 3, 'name': 'Wendys Chocolate Frosty', 'price': 3000, 'image': '/cafe/milk3.jpg'}
    ]
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const shopNow = () => {
        isAuthenticated? navigate('/dashboard'): navigate('/login')
    }

    return (
        <div className='firstH'>
            <div className='secondH'>
                <div className='underH'>
                    <h2 className='welcome'>Welcome to our place</h2>
                    <p>
                        With us, discover new felling 
                    </p>
                    <p>Try the Best sellers from the store</p>
                    <p>
                        The Excellence of our coffees will get you more fine
                    </p>  
                    <button onClick={() => shopNow()} className='btn bg-linear-to-b from-blue-600  transform  hover:scale-110 hover:bg-linear-to-t from-blue transition duration-500 ease-in-out'>Shop Now</button>  
                </div>
                <div >
                    <img  className='coffee' src="/cafe/w.jpg" alt="" />
                </div>
            </div>
            
            <div className='best-sellers-container'>
                <h2 className='prod-name'>Best Sellers</h2>
                <div className='best-sellers'>
                    {bestSellers.map((item) => (
                        <div key={item.id} className='best-items'>
                            <img className='best-items-img' src={item.image} alt="" />
                            <p> {item.name} </p>
                            <div className='prices'>
                                <p> {item.price} FCFA</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='promotion'>
                <div className='promo'>
                    <h2>Promotion</h2>
                </div>
                <div>
                    <p>Benefit from a 15% dicount</p>
                    <p>Shop now and spend less</p>
                </div>
            </div>
        </div>
    )
}