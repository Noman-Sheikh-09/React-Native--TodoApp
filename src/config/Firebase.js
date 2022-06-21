import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const db = firestore();
const authentication = auth();

export {db, authentication};
