import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  taskerContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  addTaskBtn: {
    color: 'white',
    fontSize: 15,
    padding:10,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 90,
  },
  btnView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#800080',
    borderRadius: 30,
    marginTop: 525,
  },
  header: {
    marginTop: 50,
  },
  btnAddNew: {
    color: 'white',
    marginLeft: 30,
   

  },
  todo: {
    color: '#800080',
    fontSize: 20,
  },
});
