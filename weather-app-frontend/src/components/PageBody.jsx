import './pageBody.css';

export default function PageBody(){
    return (
        <div className="page-body">
            <h4>Current Weather</h4>
            <div className="current-city-info">
                <div className="selected-city-box">
                    <p>Ghaziabad, India</p>
                    <p className="date-in-box">Monday, June 1 - 15:11 PM</p>
                    <h3 className="temperature-label">24°C</h3>
                </div>
                <div className="today-forecast-box">
                    <div className="today-forecast-title">Today's Forecast</div>
                    <div className="today-forecast-times">
                        <div className="time-box box-1">
                            <div className="time box-1">
                                Now
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-2">
                            <div className="time box-1">
                                11 AM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-3">
                            <div className="time box-1">
                                12 PM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-4">
                            <div className="time box-1">
                                1 PM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-5">
                            <div className="time box-1">
                                2 PM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-6">
                            <div className="time box-1">
                                3 PM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-7">
                            <div className="time box-1">
                                4 PM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                        <div className="time-box box-8">
                            <div className="time box-1">
                                5 PM
                            </div>
                            <div className="temp-in-box box-1">
                                24°C
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4>Weather in Other Cities</h4>
            <div className="other-cities-info">
                <div className="other-cities-info-row-1">
                    <div className="other-city">
                    </div>
                    <div className="other-city"></div>
                    <div className="other-city"></div>   
                </div>
                <div className="other-cities-info-row-2">
                    <div className="other-city"></div>
                    <div className="other-city"></div>
                    <div className="other-city"></div>
                </div>
            </div>
        </div>
    );
}