"use client";
import "./Project.modules.css";
import { useState, useEffect } from "react";
import StylishProjectButton from "./StylishProjectButton";
import ProjectImage from "./ProjectImage";

export default function Project({
	title,
	// skills,
	projectImg,
	// projectUrl,
	// gitHubUrl,
	photoAmount,
	folderName,
}) {
	const [shownImageIndex, setShownImageIndex] = useState(1);

	const changeShownImageIndex = () =>
		shownImageIndex == photoAmount
			? setShownImageIndex(1)
			: setShownImageIndex(shownImageIndex + 1);

	return (
		// deneme
		<div
			className="project__container"
			onClick={changeShownImageIndex}
		>
			<ProjectImage
				folderName={folderName}
				photoNumber={shownImageIndex}
			/>

			<button onClick={changeShownImageIndex}>sonraki</button>
			<div className="project__details">
				{/* <p className="project__title">{title.toUpperCase()}</p> */}

				<p>projectdetails</p>
				{/* <div className="project__skills">
					{skills.map((e, i) => (
						<p key={i}>{e.toUpperCase()}</p>
					))}
				</div> */}

				{/* <div className="project__buttons">
					<a href={projectUrl}>
						<StylishProjectButton value="view project" />
					</a>
					<a href={gitHubUrl}>
						<StylishProjectButton value="view code" />
					</a>
				</div> */}
			</div>
		</div>

		// <div className="project__container">
		// 	{projectImg}

		// <div className="project__details">
		// 	<p className="project__title">{title.toUpperCase()}</p>

		// 	{/* <div className="project__skills">
		// 		{skills.map((e, i) => (
		// 			<p key={i}>{e.toUpperCase()}</p>
		// 		))}
		// 	</div> */}

		// 	{/* <div className="project__buttons">
		// 		<a href={projectUrl}>
		// 			<StylishProjectButton value="view project" />
		// 		</a>
		// 		<a href={gitHubUrl}>
		// 			<StylishProjectButton value="view code" />
		// 		</a>
		// 	</div> */}
		// </div>
		// </div>
	);
}
