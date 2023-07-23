import { View, ActivityIndicator, Text } from "react-native";
import { styles } from "./Recipes.style";

import { RecipeCard } from "../../commons";
import { useRouter } from "expo-router";
import { useFetch } from "../../../hooks";
import { RecipeResponse } from "../../../interfaces/Recipes";
import { colors } from "../../../constant";

export const Recipes = () => {
	const router = useRouter();

	const { data, error, isLoading } = useFetch<RecipeResponse>(
		"https://tasty.p.rapidapi.com/recipes/list",
		{
			from: 0,
			size: 20,
		}
	);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<View style={{ justifyContent: "center", width: "100%" }}>
					<ActivityIndicator size={"large"} color={colors.primary} />
				</View>
			) : error ? (
				<Text>Something went wrong</Text>
			) : (
				data.results.map((recipe) => (
					<RecipeCard
						recipe={recipe}
						onPressHandler={() => router.push(`/recipe/${recipe.id}`)}
						key={recipe.id}
					/>
				))
			)}
		</View>
	);
};
