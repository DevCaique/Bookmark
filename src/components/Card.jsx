import Divider from '../assets/bg-dots.svg';
import './Card.css';

export function Card (props) {

    return(

        <div className="card">
        
            <div className="card-container">

                <div className="card-text">
                    <img src={props.src} alt={props.alt} className="card-img" />
                    <h3 className="card-title title">{props.title}</h3>
                    <p className="card-description description">{props.description}</p>
                </div>

                <div className="card-divider">
                    <img src={Divider} alt="" className="divider-img" />
                </div>

                <p className="card-btn btn">
                    Add & Install Extension
                </p>

            </div>
        
        </div>

    )

}