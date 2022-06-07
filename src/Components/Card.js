import React from 'react'


const Card = ({ id, name, email }) => {
	
	return (
		<div className='bg-light-green dib br3 grow pa3 ma2 bw2 shadow-5 tc'>
			<img alt='cardimg' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>	
			</div>
		</div>

		);
}

export default Card;