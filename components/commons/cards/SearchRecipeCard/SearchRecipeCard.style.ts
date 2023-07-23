import { StyleSheet } from "react-native";
import { colors, sizes, shadows } from "../../../../constant";

export const styles = StyleSheet.create({
	cardBox: {
		width: "100%",
		height: 60,
		flex: 1,
		flexDirection: "row",
		backgroundColor: colors.lightGray,
		borderRadius: 5,
		overflow: "hidden",
		marginBottom: 20,
		...shadows.small,
	},
	thumbnailWrapper: { width: 100, height: "100%" },
	thumbnailImage: { width: "100%", height: "100%" },
	detailContainer: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		justifyContent: "space-between",
	},
	title: {
		fontSize: sizes.small,
		paddingRight: 5,
	},
	cookingTimeWrapper: {
		flexDirection: "row",
	},
	cookingTimeIcon: {
		height: 12,
		width: 12,
		marginRight: 5,
	},
	cookingTimeText: {
		fontSize: sizes.xSmall,
	},
});
