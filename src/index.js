import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc, getDoc, collectionGroup, getDocs, collection, query, where} from "firebase/firestore";

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
console.log("Writing to Firestore in testDocument");
const setDocData = {
	testfield: "testing"
};
setDoc(testDoc, setDocData);
console.log("Wrote to Firestore");


//read what we just wrote
console.log("Reading from Firestore in testDocument");
const docData = await getDoc(testDoc, "testfield");
if(docData.exists()) console.log(docData.data());	//optionally wrap in JSON.stringify()
else console.log("document does not exist")

//read wildlife data from "WildlifeData" collection, not knowing all of the arbitrary document names
console.log("Reading from Firestore in WildlifeData");
const wildlifeCollection = collectionGroup(firestore, "WildlifeData");
const wildlifeDocs = await getDocs(wildlifeCollection);
var domout = ""
wildlifeDocs.forEach((doc) => {
	let out = doc.id + ": " + JSON.stringify(doc.data());
	console.log(out);
	domout += out + "<br><br>";
});
document.getElementById("output").innerHTML = domout