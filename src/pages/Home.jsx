import illustrationHero from '../assets/illustration-hero.svg';

import './Home.css';

export function Home () {

    return(

        <>
        

            <section className="introduction">

                <div className="introduction-container container split">

                    <div className="introduction-text">

                        <h2 className="introduction-title">A Simple Bookmark Manager</h2>
                        <p className="introduction-description">A clean and simple inferface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    
                        <div className="introduction-btn-container">
                            <a href="#" className="introduction-btn introduction-chrome-btn">Get it on Chrome</a>
                            <a href="#" className="introduction-btn introduction-firefox-btn">Get it on Firefox</a>
                        </div>


                    </div>

                    <div className="introduction-img-container">

                        <img src={illustrationHero} alt="Illustration" className="introduction-img" />

                    </div>

                </div>

            </section>

        
        </>

    )

}