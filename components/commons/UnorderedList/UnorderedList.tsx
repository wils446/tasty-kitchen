import { Text, View } from "react-native";
import { StyleProps } from "react-native-reanimated";
import { Section } from "../../../interfaces/Recipes";

type ListProps = { children: React.ReactNode; style?: StyleProps };
type ULProps = { items: string[] | Section[] };

export const UnorderedList = ({ items }: ULProps) => {
	return (
		<Column>
			{typeof items[0] === "string"
				? items.map((text, index) => (
						<Row style={{ marginBottom: 2 }} key={index}>
							<Text style={{ margin: 2 }}>{"\u2022"}</Text>
							<Text>{text}</Text>
						</Row>
				  ))
				: items.map((item, index) => (
						<View key={index}>
							<Row>
								<Text style={{ margin: 2 }}>{"\u2022"}</Text>
								<Text>{(item as Section).name}</Text>
							</Row>
							<Column>
								{(item as Section).components.map((item) => (
									<Row style={{ marginBottom: 2, paddingLeft: 24 }}>
										<Text style={{ margin: 2 }}>{"\u2022"}</Text>
										<Text>{item.raw_text}</Text>
									</Row>
								))}
							</Column>
						</View>
				  ))}
		</Column>
	);
};

const Column = ({ children, style }: ListProps) => (
	<View style={[{ flexDirection: "column" }, style]}>{children}</View>
);

const Row = ({ children, style }: ListProps) => (
	<View style={[{ flexDirection: "row" }, style]}>{children}</View>
);
