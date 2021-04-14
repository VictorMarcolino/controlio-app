import {StyleSheet, TextStyle} from "react-native";
import {colors} from "../../constants/Colors";

const text: TextStyle = {
    color: "#ffffff",
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list_card: {
        paddingVertical: 0,
    },
    card: {
        marginVertical: 8,
        marginHorizontal: 8,
    },
    selectedCard: {
        backgroundColor: colors.selectedSurface,
    },
    textStyle: text
});
export default styles;