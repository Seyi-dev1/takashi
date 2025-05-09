import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByo6BFEgBE3WhSON9En_O-NdOOY1n4s3k",
  authDomain: "city-tust.firebaseapp.com",
  projectId: "city-tust",
  storageBucket: "city-tust.firebasestorage.app",
  messagingSenderId: "215874524066",
  appId: "1:215874524066:web:1b636918a0a448864558fb",
};
export const handleDeposit = async (userAuth, data) => {
  const userRef = doc(database, `/users/${userAuth}`);
  const snapShot = await getDoc(userRef);
  const prevData = snapShot.data();
  console.log(prevData);
  // const deposits = prevData.deposits;
  try {
    setDoc(userRef, {
      ...prevData,
      deposits: [...prevData.deposits, data],
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleWithdrawals = async (userAuth, data) => {
  const userRef = doc(database, `/users/${userAuth}`);
  const snapShot = await getDoc(userRef);
  const prevData = snapShot.data();
  console.log(`prevData ${prevData}`);
  try {
    setDoc(userRef, {
      ...prevData,
      withdrawals: [...prevData.withdrawals, data],
      checkingBalance: Number(prevData.checkingBalance - Number(data.amount)),
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(database, `/users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date().getTime();
    try {
      await setDoc(userRef, {
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth();

// export const confirmEmail = async (email) => {
//   try {
//     await axios.post(
//       "https://welcome-mail-server-active.onrender.com/api/v1/request_email_otp/welcome_mail",
//       {
//         email,
//       }
//     );
//     console.log("Email sent!");
//   } catch (error) {
//     console.log("email not sent!");
//   }
// };
