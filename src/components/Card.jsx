
const Card = (props) => {
        const city = props.data.name;
        const temp = Math.round(props.data.main.temp);
        const clouds = props.data.weather[0].description;
        const feels_temp = Math.round(props.data.main.feels_like);
        const humidity = props.data.main.humidity;
        const icon = (props.data.weather[0].icon).slice(0,2);

    return (
    <div className="card">
        <img src={require(`../images/${icon}.svg`)} alt=""/>
        <h1>{temp}&deg;C</h1>
        <h2>{clouds}</h2>
        <div className="city">
            <span className="material-symbols-outlined">location_on</span>
            <h2>{city}</h2>
        </div>
        <div className="details">
            <div className="detail">
                <span className="material-symbols-outlined">device_thermostat</span>
                <div>
                    <h3>{feels_temp}&deg;C</h3>
                    <p>Feels like</p>
                </div>
            </div>
            <hr/>
            <div className="detail">
            <span className="material-symbols-outlined">humidity_mid</span>
                <div>
                    <h3>{humidity}%</h3>
                    <p>Humidity</p>
                </div>
            </div>  
        </div>
    </div>
    )
}

export default Card;