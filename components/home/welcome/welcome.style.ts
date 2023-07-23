import { StyleSheet } from "react-native";
import { sizes, colors, shadows } from "../../../constant/theme";

export const styles = StyleSheet.create({
	container: {
		paddingTop: sizes.large,
		paddingLeft: sizes.large,
		paddingRight: sizes.large,
	},
	greetMessage: {
		fontSize: sizes.xxLarge,
		fontWeight: "900",
	},
	welcomeMessage: {
		fontSize: sizes.medium,
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: sizes.large,
		paddingRight: sizes.large,
		marginTop: sizes.small,
	},
	searchWrapper: {
		height: 35,
		flexGrow: 1,
		marginRight: 10,
	},
	searchInput: {
		height: "100%",
		width: "100%",
		borderRadius: 8,
		backgroundColor: colors.lightGray,
		fontSize: sizes.medium,
		paddingLeft: sizes.small,
		paddingRight: sizes.small,
		...shadows.small,
	},
	searchButton: {
		width: 35,
		height: 35,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		...shadows.small,
	},
	searchButtonImage: {
		width: 25,
		height: 25,
	},
});
