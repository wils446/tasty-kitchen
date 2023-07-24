import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	View,
	Dimensions,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import { Description, Instruction } from "../../components";
import { colors } from "../../constant";
import { useFetch } from "../../hooks";
import { Recipe } from "../../interfaces/Recipes";

const RecipePage = () => {
	const { id } = useLocalSearchParams<{ id: string }>();

	const { data, error, isLoading } = useFetch<Recipe>(
		"https://tasty.p.rapidapi.com/recipes/get-more-info",
		{
			id,
		}
	);

	return (
		<SafeAreaView>
			<View>
				<StatusBar
					backgroundColor={colors.black}
					barStyle="light-content"
					animated={true}
				/>
			</View>
			<ScrollView
				style={{ paddingTop: StatusBar.currentHeight }}
				showsVerticalScrollIndicator={false}
			>
				{isLoading ? (
					<View
						style={{
							height: Dimensions.get("screen").height,
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<ActivityIndicator size={"large"} color={colors.primary} />
					</View>
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<>
						<Description
							description={data.description}
							imageUrl={data.thumbnail_url}
							title={data.name}
						/>
						<Instruction
							instructions={data.instructions}
							ingredients={data.sections}
						/>
					</>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default RecipePage;
