import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	View,
	ActivityIndicator,
	Text,
} from "react-native";

import { Pagination, SearchBar, SearchResult } from "../../components/search";
import { colors } from "../../constant";
import { useFetch } from "../../hooks";
import { RecipeResponse } from "../../interfaces/Recipes";

const Search = () => {
	const router = useRouter();

	const { query, page: currentPage } = useLocalSearchParams<{
		query: string;
		page?: string;
	}>();

	const [page, setPage] = useState(+currentPage || 1);

	const { data, error, isLoading, refetch } = useFetch<RecipeResponse>(
		"https://tasty.p.rapidapi.com/recipes/list",
		{
			q: query,
			from: (page - 1) * 10,
			size: 10,
		}
	);

	useEffect(() => {
		router.push({ pathname: "/search", params: { query, page } });
		refetch({
			q: query,
			from: (page - 1) * 10,
			size: 10,
		});
	}, [page]);

	return (
		<SafeAreaView>
			<StatusBar
				backgroundColor={colors.black}
				barStyle="light-content"
				animated={true}
			/>
			<ScrollView style={{ paddingTop: StatusBar.currentHeight }}>
				<SearchBar query={query} />
				{isLoading ? (
					<View
						style={{
							width: "100%",
							justifyContent: "center",
							marginVertical: 20,
						}}
					>
						<ActivityIndicator size={"large"} color={colors.primary} />
					</View>
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<SearchResult recipes={data.results} />
				)}
				<Pagination page={page} setPage={setPage} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Search;
