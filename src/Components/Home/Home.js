import React from 'react';
import Logo from '../../logo.svg'
import './Home.css';
import useTShirt from '../../hooks/useTshirt';
import TShirt from '../TShirt/TShirt';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [tShirts, setTShirts] = useTShirt();

    const navigate = useNavigate();
    const SeeAllReviews =()=>{
        navigate('/Reviews')

    }

    return (
        <div >
            <section>
                <nav className='Home-container'>
                    <div className='first-container'>
                        <h1 className='best-tShirt'>Best T-Shirt</h1>
                        <h1 className='name'>Choices Your <span className='t-Shirt'>T-Shirt</span> !!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda sed deleniti aut? Modi molestiae voluptatem illum qui culpa sed eligendi ipsa doloribus! Maiores asperiores architecto aspernatur vel blanditiis aliquid quia fugiat ducimus est. Quod commodi quaerat facilis! Reiciendis, corrupti.</p>

                        <button className='live-demo'>See More</button>
                    </div>
                    <div className='img'>
                        <img src={Logo} alt="" />
                    </div>
                </nav>
            </section>


            <section>

                <div>
                    <h1 className='Customer-reviews'>Customer Reviews(3)</h1>
                    <div className='TShirt-container'>
                        {
                            tShirts.map(tShirt => <TShirt
                                key={tShirt._id}
                                tShirt={tShirt}

                            ></TShirt>)
                        }

                    </div>

                    <button className='See-all-review' onClick={SeeAllReviews}>See All Review</button>
                </div>

            </section>
        </div>
    );
};

export default Home;