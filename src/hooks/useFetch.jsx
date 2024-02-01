import { useState, useEffect } from "react";

import axios from "axios";

const useFetch = (url) => {
	const [apiData, setApiData] = useState(null);
	const [loading, setLoading] = useState(false);

	const getDataFromApi = async () => {
		setLoading(true);
		const { data } = await axios.get(url);
		setApiData(data);
		setLoading(false);
	};

	useEffect(() => {
		try {
			getDataFromApi();
		} catch (err) {
			console.log(err);
		}
	}, [url]);

	return { apiData, loading };
};

export default useFetch;
