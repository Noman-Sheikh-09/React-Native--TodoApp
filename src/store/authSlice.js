import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../config/Firebase';
export const doLogin = createAsyncThunk('todoSlice/doLogin', async userData => {
  try {
    const userResponse = await auth().signInWithEmailAndPassword(
      userData?.email,
      userData?.password,
    );

    // console.log('auth slice login', userResponse);
    let snapshot = await db
      .collection('users')
      .where('userId', '==', userResponse?.user?.uid || '')
      .get();
    let data = {};
    snapshot.forEach(item => {
      data = {uid: item.id, ...item.data()};
    });

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const doSignup= createAsyncThunk("authSlice/doSignup", async(user)=>{
  try {
    const userResponse = await auth().createUserWithEmailAndPassword(
      user?.email,
      user?.password
    )
    console.log('userResponse', userResponse?.user?.uid);
    let dataSaveToDb = {
      email: user.email,
      fname: user.fname,
     lname: user.lname,
      // profilePic: url || '' ,
      userId: userResponse?.user?.uid || '',
    };
    console.log('dataSaveToDb', dataSaveToDb);
    const success = await db.collection('users').add(dataSaveToDb);
    console.log('userResponse success', success);

    // setLoading(false)
    return user;

  } catch (error) {
    console.log(error.message);
  }
})


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isUserLoggedIn: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      console.log('do login action', action);

      state.user = action.payload;
      state.isUserLoggedIn = true;
      // console.log("action payload in extrareducers",action.payload)
    })
    .addCase(doSignup.fulfilled, (state, action) => {
      console.log('do sign up action', action);
      state.user = action.payload;
      state.isUserLoggedIn = true;
    })
    // .addCase(fetchUser.fulfilled, (state, action) => {
    //   console.log('do sign up action', action);
    //   if (action?.payload?.userId) {
    //     state.user = action.payload;
    //     state.isUserLoggedIn = true;
    //   }
    // })

    // .addCase(doLogout.fulfilled, (state, action) => {
    //   state.user = null;
    //   state.isUserLoggedIn = false;
    // });
  },
});

export default authSlice.reducer;
