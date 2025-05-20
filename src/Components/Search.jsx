import { useRef, useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
	const inputRef = useRef(null);
	const [error, setError] = useState('');

	const handleSubmit = () => {
		const value = inputRef.current.value.trim();
		setError('');

		if (!value) {
			setError('Please enter an Id location');
			return;
		}

		if (value < 1 || value > 126) {
			setError('Please enter a valid Id location between 1 and 126');
			return;
		}
		onSearch(inputRef.current.value);
		inputRef.current.value = '';
	};

	return (
		<>
			<div className="form__container">
				<input
					className="form__input"
					type="text"
					placeholder="Type a valid Id location between 1 and 126"
					ref={inputRef}
				/>
				<button onClick={handleSubmit} className="form__button">
					Search
				</button>
			</div>
			{error && <p className="error">{error}</p>}
		</>
	);
}

export default Search;
