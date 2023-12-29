import Image from "next/image";
// -- Sections  --
import WelcomeSection from "./sections/a__Welcome__Section";
import SkillsSection from "./sections/b__Skills__Section";
import ProjectsSection from "./sections/c__Projects__Section";
import OutroSection from "./sections/d__Outro__Section";

import { getDoc, doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

export default async function Home() {
	// getting
	const projectsRef = doc(db, "projectsCollection", "sdnGa0gOAjCh5hDyCMjS");
	const projectsDocSnap = await getDoc(projectsRef);
	const projectsList_db = projectsDocSnap.data().projectsList;

	const skillsRef = doc(db, "skillsCollection", "mDAMM9pfTQ5wKKMsgBQ7");
	const skillsDocSnap = await getDoc(skillsRef);
	const skillsList_db = skillsDocSnap.data().skillsList;

	const profilePicImg = getDownloadURL(
		ref(storage, "profilePics/profile.png")
	).then((url) => (
		<img
			className="profile__picture"
			src={url}
		/>
	));

	// adding

	// setDoc(
	// 	projectsRef,
	// 	{
	// 		projectsList: [
	// 			{
	// 				id: 1,
	// 				title: "Restaurant App Sample",
	// 				projectName: "restaurant",
	// 				skills: ["react native", "yelp api"],
	// 				line: 1,
	// 				photoAmount: 3,
	// 				githubUrl: "https://github.com/ibrahimkeles61/restaurant",
	// 			},
	// 			{
	// 				id: 2,
	// 				title: "Auth Token Usage",
	// 				projectName: "auth_token",
	// 				skills: ["react native", "async storage"],
	// 				line: 2,
	// 				photoAmount: 3,
	// 				githubUrl: "https://github.com/ibrahimkeles61/auth_token",
	// 			},
	// 			{
	// 				id: 3,
	// 				title: "Blog App Sample",
	// 				projectName: "blog",
	// 				skills: ["react native"],
	// 				line: 3,
	// 				photoAmount: 5,
	// 				githubUrl: "https://github.com/ibrahimkeles61/blog",
	// 			},
	// 			{
	// 				id: 4,
	// 				title: "Firebase Authentication Usage",
	// 				projectName: "firebase_auth",
	// 				skills: ["react native", "firebase auth"],
	// 				line: 4,
	// 				photoAmount: 3,
	// 				githubUrl: "https://github.com/ibrahimkeles61/firebase_auth",
	// 			},
	// 		],
	// 	},
	// 	{ merge: true }
	// );

	return (
		<div style={{ width: "100vw", overflow: "hidden" }}>
			<WelcomeSection profilePicImg={profilePicImg} />
			<SkillsSection skillsList={skillsList_db} />
			<ProjectsSection projectsList={projectsList_db} />
			<OutroSection />
		</div>
	);
}

// export const revalidate = 86400;
export const revalidate = 3;
