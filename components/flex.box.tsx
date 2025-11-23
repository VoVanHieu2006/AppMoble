import { View, StyleSheet,
    Text } from "react-native"


const styles = StyleSheet.create({
    container : {
        marginTop: 40,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        flex: 1 // chiếm không gian
    },
    item1: {
        backgroundColor: 'violet',
        padding: 30,
        flex: 2
        // width: 50,
        // height: 50
    },
    item2: {
        backgroundColor: 'orange',
        padding: 30,
        flex: 1 
        // height: 100
    },
    item3: {
        backgroundColor: 'red',
        padding: 30,
        flex: 1 
    },
    item4: {
        backgroundColor: 'green',
        padding: 30,
        flex: 5  
        // width: 50,
        // height: 200
    },
})


const FlexBox = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.item1}>
                <Text> item 1 </Text>
            </View>

            <View style = {styles.item2}>
                <Text> item 2 </Text>
            </View>

            <View style = {styles.item3}>
                <Text> item 3 </Text>
            </View>

            <View style = {styles.item4}>
                <Text> item 4 </Text>
            </View>
        </View>
    )
}

export default FlexBox;