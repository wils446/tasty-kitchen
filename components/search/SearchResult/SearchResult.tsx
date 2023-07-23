import { View, Text, FlatList } from "react-native";

import { Recipe } from "../../../interfaces/Recipes";
import { SearchRecipeCard } from "../../commons";
import { styles } from "./SearchResult.style";

type SearchResultProps = {
	recipes: Recipe[];
};

export const SearchResult = ({ recipes }: SearchResultProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Search Result</Text>
			{recipes.map((recipe) => (
				<SearchRecipeCard recipe={recipe} key={recipe.id} />
			))}
		</View>
	);
};
