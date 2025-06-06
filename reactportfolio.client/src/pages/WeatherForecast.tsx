import { useEffect, useState } from 'react';
interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function WeatherForecast(){
    const [forecasts, setForecasts] = useState<Forecast[]>();
    async function populateWeatherData() {
        console.log("Test2");
        const response = await fetch('GetWeatherForecast');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setForecasts(data);
        }
    }

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
};

export default WeatherForecast;
