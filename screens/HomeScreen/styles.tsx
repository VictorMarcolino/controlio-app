import {StyleSheet, TextStyle} from "react-native";
import {colors} from "../../constants/Colors";

const text: TextStyle = {
    color: "#ffffff",
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    list_card: {
        backgroundColor: colors.background,
        paddingVertical: 0,
    },
    card: {
        marginVertical: 8,
        marginHorizontal: 8,
        // backgroundColor: Colors.primaryColor,
    },
    selectedCard: {
        backgroundColor: colors.selectedSurface,

        // borderColor: '#000000',
        // borderWidth: 3
    },
    textStyle: text
});
export default styles;