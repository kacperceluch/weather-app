import { useState } from "react"
import axios from "axios";

const Search = (props) => {
    const [text, setText] = useState("");
    const [err, setErr] = useState("");

    const API_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const API_key = "42a24249665356607db9297892ead23e";

    const handleSearch = (e) => {
        if(e.key === "Enter") {
            let finalAPIEndPoint= `${API_endpoint}q=${text}&appid=${API_key}&units=metric`;
            axios.get(finalAPIEndPoint)
                .then((response) => {
                    props.findData(response.data, true);
                })
                .catch((error) => {
                    setErr(`${text} isn"t a valid city name`);
                    console.log(error);
                });
                setText("");
        }
    };

    const handleClick = () => {
        if (navigator.geolocation) {
            navigator.permissions.query({name: "geolocation"}).then(permissionStatus => {
                if (permissionStatus.state === "granted") {

                    navigator.geolocation.getCurrentPosition((position) => {
                        let finalAPIEndPoint= `${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_key}&units=metric`;
                        axios.get(finalAPIEndPoint)
                            .then((response) => {
                                props.findData(response.data, true);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    });
                } else if (permissionStatus.state === "denied") {
                    setErr("User denied Geolocation");
                } else {
                    setErr("Geolocation is not supperted in your browser");
                }
            });
        };
    };

    return (
    <div className="search">
        {err && <span className="err">{err}</span>}
        <input onKeyDown={handleSearch} onChange={(e) => {setText(e.target.value)}} value={text} type="text" placeholder="Enter city name"/>
        <div className="break">
            <div className="line" />
            <p>or</p>
            <div className="line" />
        </div>
        <button onClick={handleClick}>Get Device Location</button>   
    </div>
    )
}

export default Search;