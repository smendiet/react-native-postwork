import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reto = () => {
    
  const colors = ["#cc4bc2", "#dd5e98", "#e16f7c", "#c1ae7c"];
  
  return (
    <View style={styles.container}>
      {/*<View style={styles.circle} />*/}
      <View style={styles.negativeBorderRadius}>
      </View>
      <View style={[styles.negativeBorderRadius, { backgroundColor: "#5171A5", borderBottomRightRadius: 50 }]}>
      </View>
      <View style={styles.halfScreen}>
        <View style={[styles.row, styles.cuadrados]}>
          <View style={{backgroundColor: "#cc4bc2", width: 60, height: 60,}}>
          </View>
          <View style={{backgroundColor: "#dd5e98", width: 60, height: 60,}}>
          </View>
          <View style={{backgroundColor: "#e16f7c", width: 60, height: 60,}}>
          </View>
          <View style={{backgroundColor: "#c1ae7c", width: 60, height: 60,}}>
          </View>
        </View>
        <View style={[styles.row, styles.semicirculo]}>
          <View style={{backgroundColor: "#5171A5", height: 120, width: 100, }}>
          </View>
          <View style={{backgroundColor: "#5171A5", height: 120, width: 100, }}>
          </View>
          <View style={{backgroundColor: "#5171A5", height: 120, width: 100, }}>
          </View>
        </View>
        <View style={[styles.row, styles.cuadrados]}>
          <View style={{backgroundColor: "#cc4bc2", width: 60, height: 60,}}>
          </View>
          <View style={{backgroundColor: "#dd5e98", width: 60, height: 60,}}>
          </View>
          <View style={{backgroundColor: "#e16f7c", width: 60, height: 60,}}>
          </View>
          <View style={{backgroundColor: "#c1ae7c", width: 60, height: 60,}}>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5171A5",
    width: "100%",
    height: "100%"
  },
  halfScreen: {
    backgroundColor: "#3F3047",
    width: "100%",
    height: windowHeight / 2,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
  },
  negativeBorderRadius: {
    width: 100,
    height: 100,
    backgroundColor: "#3F3047",
    position: "absolute",
    top: windowHeight / 2 - 100,
    right: 0
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#98B9AB',
    position: "absolute",
    top: windowHeight / 2 - 50,
    zIndex: 1,
    left: windowWidth / 2 - 50,
    borderColor: '#5171A5',
    borderWidth: 10
  },
  row: {
    flex: 1,
  },
  cuadrados: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 60,
    marginRight: 60,
  },
  semicirculo: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Reto;