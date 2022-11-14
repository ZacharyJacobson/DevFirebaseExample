import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc} from "firebase/firestore";

var json = require("./login.json");

const firebaseApp = initializeApp({
	type: json.type,
	projectId: json.project_id,
	privateKeyId: json.private_key_id,
	privateKey: json.private_key,
	clientEmail: json.client_email,
	clientId: json.client_id,
	authUri: json.auth_uri,
	tokenUri: json.token_uri,
	authProviderX509CertUrl: json.auth_provider_x509_cert_url,
	clientX509CertUrl: json.client_x509_cert_url
});

console.log("Initializing Firestore");
const firestore = getFirestore();
console.log("Initialized Firestore");

const testDoc = doc(firestore, "testCollection/testDocument")

//write to the document
console.log("Writing to Firestore");
const docData = {
	testfield: "testing2"
};
setDoc(testDoc, docData)
console.log("Wrote to Firestore");
