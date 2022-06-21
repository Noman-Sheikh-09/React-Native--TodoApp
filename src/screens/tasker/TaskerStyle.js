import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  taskerContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  addTaskBtn: {
    color: 'white',
    backgroundColor:"#800080",
    fontSize: 15,
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 90,
    borderRadius:30
  },
  btnView: {
    flex: 0.15,
    flexDirection: 'row',
    borderRadius: 30,
  },
  headerContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnAddNew: {
    color: 'white',
    marginLeft: 30,
  },
  todo: {
    color: '#800080',
    fontSize: 20,
  },
  taskContainer: {
    flex: 0.5,
  },
  calenderConatiner: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    flex: 0.2,
  },
  totalTaskContainer:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
  }
});
