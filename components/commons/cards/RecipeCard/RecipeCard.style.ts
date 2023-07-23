import { StyleSheet } from "react-native";

import { sizes, colors, shadows } from "../../../../constant";

export const styles = StyleSheet.create({
	cardBox: {
		height: 150,
		width: 150,
		backgroundColor: colors.gray,
		borderRadius: 10,
		overflow: "hidden",
		...shadows.medium,
		marginBottom: 20,
	},
	thumbnailWrapper: {
		height: "50%",
	},
	thumbnailImage: {
		height: "100%",
	},
	detailContainer: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 10,
		justifyContent: "space-between",
		flexGrow: 1,
	},
	name: {
		fontSize: sizes.small,
	},
	cookingTimeWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	cookingTime: {
		fontSize: sizes.xSmall,
	},
	cookingTimeImage: {
		height: 12,
		width: 12,
		marginRight: 2,
	},
});
