import github from '@images/github.png';
import instagram from '@images/instagram.png';
import twitter from '@images/twitter.png';
import React from "react";

const Template = ({ character }) => {
  return (  
    <div className="About">
		<div className="card">
			<div className="card_details">
				<div className="card_photo center circle">
					<img src={character.picture.large} alt={character.name.first} />
					<svg
						viewBox="0 0 100 100"
						style={{
							enableBackgroud: "new -580 439 577.9 194",
						}}
					>
						<circle cx="50" cy="50" r="40" />
					</svg>
				</div>

				<p className="card_title">Hi, My name is</p>
				<p className="card_value">{character.name.first} {character.name.last}</p>
			</div>

			<div className="card_userdata">
				<ul>
					<li>
						<a className="email" type="email" href={character.email}>
						{character.email}
						</a>
					</li>
					<li>{character.location.country}</li>
				</ul>
			</div>

			<div className="card_social">
				<a href="https://twitter.com/itsluismario">
					<img src={twitter} />
				</a>
				<a href="https://github.com/itsluismario">
					<img src={github} />
				</a>
				<a href="https://instagram.com/its.luismario">
					<img src={instagram} />
				</a>
			</div>
		</div>
	</div>

  );

}

export default Template;
