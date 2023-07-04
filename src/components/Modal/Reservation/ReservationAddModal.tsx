import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getReservationAddModalVisible,
  setReservationAddModalVisible,
} from '@/redux/features/modalState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ReservationAddModal = () => {
  const modalVisible = useAppSelector(getReservationAddModalVisible);
  const dispatach = useAppDispatch();
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatach(setReservationAddModalVisible(false));
      }}>
      <View style={styles.container}>
        <View style={buttonStyles.container}>
          <View style={buttonStyles.titleCard}>
            <Text style={buttonStyles.title}>Select Reservaetion Data</Text>
          </View>
          <View style={buttonStyles.buttons}>
            <View style={buttonStyles.card}>
              <TouchableOpacity>
                <View>
                  <Text style={buttonStyles.text}>{USER.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={buttonStyles.card}>
              <TouchableOpacity>
                <View>
                  <Text style={buttonStyles.text}>{CARD.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={buttonStyles.card}>
              <TouchableOpacity>
                <View>
                  <Text style={buttonStyles.text}>{ROOM.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={detailStyles.container}>
          <View style={detailStyles.categoryContainer}>
            <View>
              <Text style={detailStyles.categoryText}>
                {USER.toUpperCase()}
              </Text>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'id'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>{'example'}</Text>
              </View>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'name'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>{'example'}</Text>
              </View>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'phone'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>{'example'}</Text>
              </View>
            </View>
          </View>

          <View style={detailStyles.categoryContainer}>
            <View>
              <Text style={detailStyles.categoryText}>
                {ROOM.toUpperCase()}
              </Text>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'id'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>{'example'}</Text>
              </View>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'address'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>{'example'}</Text>
              </View>
            </View>
          </View>

          <View style={detailStyles.categoryContainer}>
            <View>
              <Text style={detailStyles.categoryText}>
                {CARD.toUpperCase()}
              </Text>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'id'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>{'example'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={cancelStyles.container}>
          <TouchableOpacity
            onPress={() => {
              dispatach(setReservationAddModalVisible(false));
            }}>
            <View style={cancelStyles.button}>
              <Text style={cancelStyles.text}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: '5%',
    backgroundColor: '#3c3c3c',
  },
});
const buttonStyles = StyleSheet.create({
  container: {
    padding: '2%',
  },
  buttons: {
    paddingLeft: '2%',
    paddingRight: '2%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleCard: {
    padding: ' 1.5%',
    marginBottom: '2%',
  },
  title: {
    fontSize: 22,
    color: '#ffffff',
  },
  card: {
    width: '31%',
    padding: '1.5%',
    backgroundColor: '#ffffff',

    borderRadius: 18,
  },
  text: {
    textAlign: 'center',
    color: '#3c3c3c',
  },
});
const detailStyles = StyleSheet.create({
  container: {padding: '3%'},
  card: {
    marginTop: '3%',
    paddingLeft: '2%',
  },
  categoryContainer: {marginTop: '6%'},
  categoryText: {
    fontSize: 18,
    color: '#ffffff',
  },

  titleText: {fontSize: 16, color: '#ffffff'},

  dataCard: {
    marginTop: '2%',
    paddingLeft: '4%',
    paddingBottom: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  dataText: {fontSize: 14, color: '#3c3c3c'},
});
const cancelStyles = StyleSheet.create({
  container: {marginTop: '5%', padding: '5%'},
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#3c3c3c',
  },
});
export default ReservationAddModal;
