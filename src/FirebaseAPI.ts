import {firestore} from './config.ts';
import { addDoc, collection, setDoc, doc, getDocs, getDoc, where, endAt, startAt, deleteDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export async function firestoreReadText(callback) {
    try {
        var list = []
        const querySnapshot = await getDocs(collection(firestore, "task"));
        querySnapshot.forEach((doc) => {
            if (doc.exists) {
                list.push({id:doc.id, data:doc.data()})
            } else {
                // this.setState({user: null});
                console.log("No data");
            }
        })
        callback(list, null)
    } catch(err) {
        callback([], err)
    }
}

export async function firestoreDeleteText(id, callback) {
    try {
        await deleteDoc(doc(firestore, "task", id));
        callback(null)
    } catch(err) {
        callback(err)
    }
}

export async function firestoreAddText(myText) {
    const docRef = await addDoc(collection(firestore, "task"), {
        text: myText
      });
      console.log(`Add ${docRef.id} to the database`);
}

