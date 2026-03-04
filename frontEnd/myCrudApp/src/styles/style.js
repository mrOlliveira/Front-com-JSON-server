import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 4,
        marginHorizontal: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    text: {
        fontSize: 14,
        color: '#333',
    },
    list : {
        justifyContent: 'flex-end',
        maxHeight: '50%'
    }
});