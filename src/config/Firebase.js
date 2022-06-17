import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


let db = firestore()
let auth = auth()

export {db,auth}