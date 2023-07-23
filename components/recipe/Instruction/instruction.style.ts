import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../constant";

export const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingTop: 0,
	},
	buttonWrapper: {
		flexDirection: "row",
		marginBottom: 10,
	},
	button: {
		height: 30,
		width: 100,
		marginRight: 10,
		borderWidth: 2,
		borderColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
	},
	activeButton: {
		height: 30,
		width: 100,
		marginRight: 10,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
	},
	buttonText: {
		color: colors.primary,
	},
	activeButtonText: {
		color: colors.lightWhite,
	},
	instructionContainer: {
		backgroundColor: colors.lightGray,
		padding: 10,
		paddingTop: 5,
		borderRadius: 5,
		marginBottom: 10,
	},
	instructionTitle: {
		fontSize: sizes.medium,
		marginBottom: sizes.xSmall,
	},
});
