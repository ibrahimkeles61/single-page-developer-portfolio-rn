import "./c__Projects__Section.modules.css";
import Project from "../components/Project";

import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import SliderProjectPhotos from "../components/SliderProjectPhotos";

// function ProjectPhotos({ photoAmount, folderName }) {
// 	return (
// 		<div>
// 			{Array(photoAmount)
// 				.fill(0)
// 				.map((_, i) => (
// 					<ProjectPhoto
// 						folderName={folderName}
// 						index={i + 1}
// 					/>
// 				))}
// 		</div>
// 	);
// }

export default async function ProjectsSection({ projectsList }) {
	return (
		// deneme:
		<div className="projectSection__container">
			<div className="projectSection__header">
				<p>Projects</p>
			</div>

			<div className="projects">
				{projectsList.map((project) => (
					<Project
						key={project.id}
						photoAmount={project.photoAmount}
						folderName={project.projectName}
						title={project.title}
						skills={project.skills}
					/>
				))}
			</div>
		</div>

		// <div className="projectSection__container">
		// 	<div className="projectSection__header">
		// 		<p>Projects</p>
		// 		<p>These are just sample images, for now..</p>
		// 	</div>

		// 	<p>asdf</p>

		// 	<div className="projects">
		// 		{/* {projectsList.map((e, i) => (
		// 			<Project
		// 				key={e.id}
		// 				title={e.title}
		// 				skills={e.skills}
		// 				projectUrl={e.projectUrl}
		// 				gitHubUrl={e.githubUrl}
		// 				projectImg={getDownloadURL(
		// 					ref(storage, `projectPics/blog 1.jpg`)
		// 					// ref(storage, `projectPics/${e.imagesFolderName}/`)
		// 				).then((url) => (
		// 					<img
		// 						src={url}
		// 						className="project__photo"
		// 					/>
		// 				))}
		// 			/>
		// 		))} */}
		// 	</div>
		// </div>
	);
}

// =============================================================================================================
// foreach içindeki itemrefler firebase cloud storageda şu şekilde:
// projectPics/restaurant/restaurant 1.jpg
// ve bunlarin herbirini Reference olarak bana donuyor:

// Reference {
//   _service: FirebaseStorageImpl {
//     app: FirebaseAppImpl {
//       _isDeleted: false,
//       _options: [Object],
//       _config: [Object],
//       _name: '[DEFAULT]',
//       _automaticDataCollectionEnabled: false,
//       _container: [ComponentContainer]
//     },
//     _authProvider: Provider {
//       name: 'auth-internal',
//       container: [ComponentContainer],
//       component: null,
//       instances: Map(0) {},
//       instancesDeferred: Map(0) {},
//       instancesOptions: Map(0) {},
//       onInitCallbacks: [Map]
//     },
//     _appCheckProvider: Provider {
//       name: 'app-check-internal',
//       container: [ComponentContainer],
//       component: null,
//       instances: Map(0) {},
//       instancesDeferred: Map(0) {},
//       instancesOptions: Map(0) {},
//       onInitCallbacks: [Map]
//     },
//     _url: undefined,
//     _firebaseVersion: '10.0.0',
//     _bucket: Location { bucket: 'ibrahimkeles.appspot.com', path_: '' },
//     _host: 'firebasestorage.googleapis.com',
//     _protocol: 'https',
//     _appId: null,
//     _deleted: false,
//     _maxOperationRetryTime: 120000,
//     _maxUploadRetryTime: 600000,
//     _requests: Set(0) {}
//   },
//   _location: Location {
//     bucket: 'ibrahimkeles.appspot.com',
//     path_: 'projectPics/restaurant/restaurant 1.jpg'
//   }
// }

// =============================================================================================================
