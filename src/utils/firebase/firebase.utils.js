import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
  get,
  where,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDahSCpTlyEZqNKMLEIukeAX5nYu63iuUw",
  authDomain: "soroush-7cecc.firebaseapp.com",
  projectId: "soroush-7cecc",
  storageBucket: "soroush-7cecc.appspot.com",
  messagingSenderId: "663532237805",
  appId: "1:663532237805:web:482d64cc7d0159a3392de4",
  measurementId: "G-1TEC6QV3GX",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const getProjects = async () => {
  const collectionRef = collection(db, "projects");
  var q;

  q = query(collectionRef, orderBy("date", "desc"));

  const querySnapshot = await getDocs(q);
  const projectsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, ...otherProps } = docSnapshot.data();
    acc[title] = otherProps;
    return acc;
  }, {});
  return projectsMap;
};

export const getProject = async (id) => {
  const collectionRef = collection(db, "projects");
  var q;

  q = query(collectionRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const projectsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, ...otherProps } = docSnapshot.data();
    acc[title] = otherProps;
    return acc;
  }, {});
  return {
    title: Object.keys(projectsMap)[0],
    ...projectsMap[Object.keys(projectsMap)[0]],
  };
};
