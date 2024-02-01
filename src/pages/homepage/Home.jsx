import React from "react";
import useFetch from "../../hooks/useFetch.jsx";
import Tvshow from "../../components/tvshow/Tvshow.jsx";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper.jsx";
import "./style.css";

const Home = () => {
	const { apiData, loading } = useFetch(
		"https://api.tvmaze.com/search/shows?q=all",
	);
	console.log(apiData);

	return (
		<ContentWrapper>
			<div className="shows__container">
				{apiData?.map((data) => (
					<Tvshow data={data} />
				))}
			</div>
		</ContentWrapper>
	);
};

export default Home;
