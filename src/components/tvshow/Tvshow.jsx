import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Tvshow = ({ data }) => {
	const navigate = useNavigate();
	return (
		<div className="main-container">
			<div className="img__container">
				<img
					src={
						data.show.image
							? data.show.image.medium
							: "/no-poster.png"
					}
					alt=""
				/>
			</div>
			<div className="info__container">
				<h2>{data.show.name}</h2>
				<div className="genere__container">
					{data?.show?.genres?.map((genre) => (
						<span className="genere">{genre}</span>
					))}
				</div>
				<div className="runtime">
					RunTime:{" "}
					<span>
						{!data.show.runtime
							? "NA"
							: data.show.runtime % 60 == 0
							? `${data.show.runtime / 60}h`
							: data.show.runtime >= 60
							? `${Math.floor(data.show.runtime / 60)}h ${
									data.show.runtime % 60
							  }m`
							: `${data.show.runtime}m`}
					</span>
				</div>
				<button onClick={() => navigate(`/summry/${data.show.id}`)}>
					Summry
				</button>
			</div>
		</div>
	);
};

export default Tvshow;
