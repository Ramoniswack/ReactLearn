import profilePic from './assets/profilepicture.jpg';
import './index.css';

function Card()
{
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Ramon</h2>
            <p className='card-text'> I love singing and writing...</p>
        </div>
           

        

    );
}

export default Card