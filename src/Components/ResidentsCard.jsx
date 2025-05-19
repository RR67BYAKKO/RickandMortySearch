import { useEffect } from 'react';
import { useFetchApi } from '../Hooks/useFetchApi';
import './ResidentsCard.css';

function ResidentsCard({ url }) {
	const { fetchingData, data: resident, loading } = useFetchApi();

	useEffect(() => {
		fetchingData(url);
	}, [url]);

	if (loading) return <h2>loading...</h2>;

	const totalEpisodes = resident?.episode?.length;
	const totalEpisodesText = totalEpisodes === 1 ? 'episode' : 'episodes';
	const statusClass =
		resident?.status === 'Alive'
			? 'alive'
			: resident?.status === 'Dead'
			? 'dead'
			: 'unknown';

	return (
		<>
			<div className="resident">
				<div className="resident__image">
					<img
						className="resident__img"
						src={resident?.image}
						alt={resident?.name}
					/>
					<span className="resident__status">
						<span className={`resident--${statusClass}`} /> {resident?.status}
					</span>
				</div>

				<div className="resident__body">
					<h2 className="resident__name">{resident?.name}</h2>

					<div className="resident__content">
						<p className="resident__item">
							<b>Specie:</b> {resident?.species}
						</p>

						<p className="resident__item">
							<b>Origin:</b> {resident?.origin?.name}
						</p>

						<p className="resident__item">
							<b>Episodes where appear: </b> {totalEpisodes} {totalEpisodesText}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ResidentsCard;
