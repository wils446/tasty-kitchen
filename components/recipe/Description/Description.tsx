import { Image, View, Text } from "react-native";

import { styles } from "./Description.style";

type DescriptionProps = {
	imageUrl: string;
	title: string;
	description: string;
};

export const Description = ({
	description,
	imageUrl,
	title,
}: DescriptionProps) => (
	<View>
		<View style={styles.imageWrapper}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
		</View>
		<View style={styles.detailContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	</View>
);
