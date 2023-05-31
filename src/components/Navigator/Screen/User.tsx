import {View, Text, StyleSheet, TextInput} from 'react-native';

const UserScreen = ({route}: {route: any}) => {
  return (
    <View style={styles.container}>
      <View style={dataStyles.dataContainer}>
        <View style={dataStyles.itemContainer}>
          <Text>User ID</Text>
          <TextInput style={styles.whiteText}>user id</TextInput>
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>User Name</Text>
          <TextInput style={styles.whiteText}>user name</TextInput>
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>Private Key</Text>
          <TextInput style={styles.whiteText}>private key</TextInput>
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>Last Tagged</Text>
          <TextInput style={styles.whiteText}>last tagged</TextInput>
        </View>
      </View>
      <View style={listStyles.listContainer}>
        <View style={listStyles.titleContainer}>
          <Text style={styles.text}>List</Text>
        </View>
        <View style={listStyles.itemContainer}>
          <Text style={styles.text}>User ID</Text>
          <Text style={styles.text}>User Name</Text>
          <Text style={styles.text}>Private Key</Text>
          <Text style={styles.text}>Last Tagged</Text>
        </View>
        <View style={listStyles.itemContainer}>
          <Text style={styles.text}>User ID</Text>
          <Text style={styles.text}>User Name</Text>
          <Text style={styles.text}>Private Key</Text>
          <Text style={styles.text}>Last Tagged</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {padding: '3%'},
  whiteText: {
    color: '#ffffff',
  },
  text: {
    color: '#3c3c3c',
  },
});
const dataStyles = StyleSheet.create({
  dataContainer: {
    backgroundColor: '#3c3c3c',
    padding: '2%',
  },
  itemContainer: {},
});
const listStyles = StyleSheet.create({
  listContainer: {},
  titleContainer: {padding: '2%'},
  itemContainer: {
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default UserScreen;
