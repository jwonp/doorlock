import {View, Button, Text, StyleSheet, Modal} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoImageWrapper}></View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button
            title="Card"
            color="#3c3c3c"
            onPress={() => navigation.navigate('Card')}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="User"
            color="#3c3c3c"
            onPress={() => navigation.navigate('User')}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Room"
            color="#3c3c3c"
            onPress={() => navigation.navigate('Room')}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="NFC Scan"
            color="#3c3c3c"
            onPress={() => navigation.navigate('Scan')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  logoContainer: {
    flex: 1, // pushes the footer to the end of the screen
  },
  logoImageWrapper: {},

  buttonContainer: {
    marginBottom: '5%',
  },

  text: {
    color: '#3c3c3c',
  },
  buttonBox: {
    marginBottom: '2%',
  },
});
export default HomeScreen;
