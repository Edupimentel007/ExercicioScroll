import { ScrollView, View } from "react-native";
import { styles } from "./src/styles/Style";

export default function App() {
  return (
    <View style={styles.container}>
      <View styles={styles.header}></View>
      <ScrollView horizontal={true}>
        <View style={styles.cont}>
          <View style={[styles.body, { backgroundColor: "blue" }]}></View>
          <View style={[styles.body, { backgroundColor: "green" }]}></View>
          <View style={[styles.body, { backgroundColor: "purple" }]}></View>
          <View style={[styles.body, { backgroundColor: "pink" }]}></View>
          <View style={[styles.body, { backgroundColor: "gray" }]}></View>
          <View style={[styles.body, { backgroundColor: "yellow" }]}></View>
        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}
