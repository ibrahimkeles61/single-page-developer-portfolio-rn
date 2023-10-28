import "./SliderProjectPhotos.modules.css";

export default function SliderProjectPhotos({ photos, url }) {
	return (
		<div>
			SliderProjectPhotos:
			{photos}
			<img
				src={url}
				alt=""
			/>
		</div>
	);
}
