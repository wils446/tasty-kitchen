import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T>(url: string, params: Object) => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async (params: Object) => {
		setIsLoading(true);

		try {
			const response = await axios.request<T>({
				url,
				method: "GET",
				params,
				headers: {
					"X-RapidAPI-Key":
						"c54bab6f6bmsh1713b6eea4fb695p10c35ajsn8f6898b41fd2",
					"X-RapidAPI-Host": "tasty.p.rapidapi.com",
				},
			});

			setData(response.data);
			setIsLoading(false);
		} catch (err) {
			setError(err);
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData(params);
	}, []);

	const refetch = (newParams = params) => {
		setIsLoading(true);
		fetchData(newParams);
	};

	return { data, isLoading, error, refetch };
};
