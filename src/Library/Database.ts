import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Firebase";
import { CollectionName } from "../Utils";

export class Database {
    static async getAllUrl() {
        const querySnapshot = await getDocs(collection(db, CollectionName));
        const docsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return docsData;
    }
    static async getUrl(queryString: string) {
        const q = query(collection(db, CollectionName), where("converted_url", "==", queryString));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }
    static async addUrl({ originalUrl, convertedUrl }: { [key: string]: string }) {
        return await addDoc(collection(db, CollectionName), {
            original_url: originalUrl,
            converted_url: convertedUrl,
            created_on: new Date()
        })
    }
}