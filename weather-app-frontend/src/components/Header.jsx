import sunCloudImg from '../assets/sun-cloud-image.png';
import './Header.css';

export default function Header(){
    return (
        <div className='top-header'>
            <div className="weather-icon-title">
                <img className='element header-img' src={sunCloudImg}></img>
                <h3 className='element weather-app-heading'>Weather App</h3>
            </div>
            <input className='element input-field' placeholder="Search for a city..."></input>
            <div className="temp-buttons">
                <button className='element'>Celcius</button>
                <button className='element fahrenheit-button'>Fahrenheit</button>
            </div>
        </div>
    );
}