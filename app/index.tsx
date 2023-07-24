import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Recipes, Welcome } from "../components";
import { colors } from "../constant";

const Home = () => {
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
				showsVerticalScrollIndicator={false}
				style={{ paddingTop: StatusBar.currentHeight }}
			>
				<LinearGradient
					style={{
						position: "absolute",
						width: 284,
						height: 284,
						flexShrink: 0,
						borderRadius: 284,
						top: -90,
						left: -85,
						transform: [{ rotate: "137deg" }],
					}}
					colors={["rgba(218, 195, 255, 0.00)", "#995AFF"]}
					locations={[0.08, 0.8]}
				/>
				<Welcome />
				<Recipes />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
