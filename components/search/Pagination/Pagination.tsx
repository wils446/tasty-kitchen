import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./Pagination.style";

type PaginationProps = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ page, setPage }: PaginationProps) => (
	<View style={styles.container}>
		<TouchableOpacity
			style={styles.button}
			onPress={() => setPage((prev) => --prev)}
			disabled={page === 1}
		>
			<Text style={styles.btnContent}>{"<"}</Text>
		</TouchableOpacity>
		<View style={styles.page}>
			<Text>{page}</Text>
		</View>
		<TouchableOpacity
			style={styles.button}
			onPress={() => setPage((prev) => ++prev)}
		>
			<Text style={styles.btnContent}>{">"}</Text>
		</TouchableOpacity>
	</View>
);
