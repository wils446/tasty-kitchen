import { View, TouchableOpacity, Text, FlatList } from "react-native";

import {
	Instruction as IntructionType,
	Section,
} from "../../../interfaces/Recipes";
import { styles } from "./instruction.style";
import { useState } from "react";
import { UnorderedList } from "../../commons";

type InstructionProps = {
	instructions: IntructionType[];
	ingredients: Section[];
};

export const Instruction = ({
	ingredients,
	instructions,
}: InstructionProps) => {
	const [selectedItem, setSelectedItems] = useState<
		"ingredients" | "instruction"
	>("ingredients");

	return (
		<View style={styles.container}>
			<View style={styles.buttonWrapper}>
				<TouchableOpacity
					style={
						selectedItem === "ingredients" ? styles.activeButton : styles.button
					}
					onPress={() => setSelectedItems("ingredients")}
				>
					<Text
						style={
							selectedItem === "ingredients"
								? styles.activeButtonText
								: styles.buttonText
						}
					>
						ingredients
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						selectedItem === "instruction" ? styles.activeButton : styles.button
					}
					onPress={() => setSelectedItems("instruction")}
				>
					<Text
						style={
							selectedItem === "instruction"
								? styles.activeButtonText
								: styles.buttonText
						}
					>
						instruction
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.instructionContainer}>
				<Text style={styles.instructionTitle}>{selectedItem}</Text>
				<View>
					<UnorderedList
						items={
							selectedItem === "ingredients"
								? ingredients.length > 1
									? ingredients
									: ingredients[0].components.map((item) => item.raw_text)
								: instructions.map((item) => item.display_text)
						}
					/>
				</View>
			</View>
		</View>
	);
};
