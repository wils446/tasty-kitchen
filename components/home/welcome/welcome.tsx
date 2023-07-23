import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import { styles } from "./welcome.style";
import { icons } from "../../../constant";

export const Welcome = () => {
	const router = useRouter();

	const [searchInput, setSearchInput] = useState("");

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.greetMessage}>Hello!</Text>
				<Text style={styles.welcomeMessage}>Find your recipe</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						placeholder="find your recipe here"
						onChangeText={setSearchInput}
					/>
				</View>
				<TouchableOpacity
					style={styles.searchButton}
					onPress={() =>
						router.push({ pathname: "/search", params: { query: searchInput } })
					}
					disabled={!searchInput.length}
				>
					<Image style={styles.searchButtonImage} source={icons.search} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
