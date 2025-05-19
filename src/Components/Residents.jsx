import ResidentsCard from './ResidentsCard';
import './Residents.css';

function Residents({ residents }) {
	return (
		<div className="residents">
			{residents.map((resident) => (
				<ResidentsCard key={resident} url={resident} />
			))}

			{residents.length === 0 && (
				<p className="not__found">Not residents found</p>
			)}
		</div>
	);
}

export default Residents;
