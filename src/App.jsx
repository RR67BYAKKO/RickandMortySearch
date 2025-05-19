import { useEffect, useState } from 'react';
import { useFetchApi } from './Hooks/useFetchApi';
import { getRandomLocationById } from './Lib/utils';
import Location from './Components/Location';
import Residents from './Components/Residents';
import Search from './Components/Search';
import './App.css';

const baseUrl = 'https://rickandmortyapi.com/api/location/';

function App() {
	const { fetchingData, data: location, loading } = useFetchApi();
	const [locationId, setLocationId] = useState(getRandomLocationById());

	useEffect(() => {
		fetchingData(`${baseUrl}${locationId}`);
	}, [locationId]);

	return (
		<>
			<header className="header"></header>

			<main className="main">
				{/* Seach location */}
				<section className="section">
					<div className="container">
						<Search onSearch={setLocationId} />
					</div>
				</section>

				{/* Location section */}
				<section className="section">
					<div className="container">
						{loading ? <h2>Loading....</h2> : <Location location={location} />}
					</div>
				</section>

				{/* Residents section */}
				<section className="section">
					<div className="container">
						{location && <Residents residents={location.residents} />}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
