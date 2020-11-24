import {StyleSheet} from "react-native";
import {colors} from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list_card: {
        // backgroundColor: '#f0f0f0'
        paddingTop: 8
    },
    card: {
        marginBottom: 8,
        marginHorizontal: 8,
        // backgroundColor: Colors.primaryColor,
    },
    selectedCard: {
        backgroundColor: colors.selectedSurface,
        // borderColor: '#000000',
        // borderWidth: 3
    }
});
export default styles;