import { View, Image, Text, TouchableOpacity } from "react-native";

import { Recipe } from "../../../../interfaces/Recipes";
import { styles } from "./SearchRecipeCard.style";
import { icons } from "../../../../constant";
import { useRouter } from "expo-router";

type SearchRecipeCardProps = {
	recipe: Recipe;
};

export const SearchRecipeCard = ({ recipe }: SearchRecipeCardProps) => {
	const router = useRouter();

	return (
		<TouchableOpacity
			style={styles.cardBox}
			onPress={() => router.push(`/recipe/${recipe.id}`)}
		>
			<View style={styles.thumbnailWrapper}>
				<Image
					source={{ uri: recipe.thumbnail_url }}
					style={styles.thumbnailImage}
				/>
			</View>

			<View style={styles.detailContainer}>
				<Text style={styles.title} numberOfLines={1}>
					{recipe.name}
				</Text>
				<View style={styles.cookingTimeWrapper}>
					<Image source={icons.stopwatch} style={styles.cookingTimeIcon} />
					<Text style={styles.cookingTimeText}>
						{recipe.total_time_minutes
							? recipe.total_time_minutes + " Minutes"
							: recipe.prep_time_minutes || recipe.cook_time_minutes
							? +recipe.prep_time_minutes +
							  +recipe.cook_time_minutes +
							  " Minutes"
							: "-"}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
