import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address.'};
    }
    return {error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      return {status: false, error: 'Incorrect email or password. Try again.'};
    }
    console.log(error.code);
    return {status: false, error: 'Something went wrong'};
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let response = auth().currentUser.getIdToken(true);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
