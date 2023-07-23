import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../constant";

export const styles = StyleSheet.create({
	container: {
		padding: sizes.large,
		paddingTop: sizes.medium,
	},
	title: {
		color: colors.darkGray,
		marginBottom: sizes.small,
	},
	resultWrapper: {
		width: "100%",
	},
});
