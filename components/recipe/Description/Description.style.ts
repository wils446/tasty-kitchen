import { StyleSheet } from "react-native";
import { sizes } from "../../../constant";

export const styles = StyleSheet.create({
	imageWrapper: {
		width: "100%",
		height: 180,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	detailContainer: {
		padding: sizes.large,
	},
	title: {
		fontSize: sizes.medium,
		marginBottom: sizes.xSmall,
		fontWeight: "600",
	},
	description: {
		fontSize: sizes.small,
	},
});
