import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import { styles } from "./SearchBar.style";
import { icons } from "../../../constant";

type SearchBarProps = {
	query: string;
};

export const SearchBar = ({ query }: SearchBarProps) => {
	const router = useRouter();

	const [inputValue, setInputValue] = useState(query);

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.title}>{query}</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						placeholder="find your recipe here"
						onChangeText={setInputValue}
						value={inputValue}
					/>
				</View>
				<TouchableOpacity
					style={styles.searchButton}
					onPress={() => router.push(`/search/${inputValue}`)}
					disabled={!inputValue.length}
				>
					<Image style={styles.searchButtonImage} source={icons.search} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
