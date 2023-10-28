"use client";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import "./ProjectImage.modules.css";

export default function ProjectImage({ folderName, photoNumber }) {
	const [projectImage, setProjectImage] = useState(<></>);

	useEffect(() => {
		setProjectImage(
			folderName &&
				getDownloadURL(
					ref(storage, `projectPics/${folderName} ${photoNumber}.jpg`)
				).then((url) => (
					<img
						className="project__image"
						src={url}
					/>
				))
		);
	}, [folderName, photoNumber]);

	return projectImage;
}
