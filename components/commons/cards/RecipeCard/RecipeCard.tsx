import { View, Image, TouchableOpacity, Text } from "react-native";

import { styles } from "./RecipeCard.style";
import { Recipe } from "../../../../interfaces/Recipes";
import { icons } from "../../../../constant";

type RecipeCardProps = {
	recipe: Recipe;
	onPressHandler: () => void;
};

export const RecipeCard = ({ recipe, onPressHandler }: RecipeCardProps) => {
	return (
		<TouchableOpacity style={styles.cardBox} onPress={onPressHandler}>
			<View style={styles.thumbnailWrapper}>
				<Image
					style={styles.thumbnailImage}
					source={{ uri: recipe.thumbnail_url }}
				/>
			</View>

			<View style={styles.detailContainer}>
				<Text style={styles.name} numberOfLines={2}>
					{recipe.name}
				</Text>

				<View style={styles.cookingTimeWrapper}>
					<Image source={icons.stopwatch} style={styles.cookingTimeImage} />
					<Text style={styles.cookingTime}>
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
