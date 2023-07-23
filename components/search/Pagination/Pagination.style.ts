import { StyleSheet } from "react-native";
import { colors } from "../../../constant";

export const styles = StyleSheet.create({
	container: {
		paddingBottom: 50,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "center",
	},
	button: {
		height: 28,
		width: 28,
		borderRadius: 3,
		paddingHorizontal: 5,
		backgroundColor: colors.primary,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 10,
	},

	btnContent: {
		color: colors.lightWhite,
	},
	page: {
		borderWidth: 2,
		borderColor: colors.gray,
		width: 28,
		height: 28,
		borderRadius: 3,
		justifyContent: "center",
		alignItems: "center",
	},
});
