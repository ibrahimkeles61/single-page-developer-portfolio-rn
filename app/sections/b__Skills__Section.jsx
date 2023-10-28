import "./b__Skills__Section.modules.css";
import Rings from "../components/Rings";

export default function SkillsSection({ skillsList }) {
	skillsList.sort((a, b) => a.line - b.line);

	return (
		<div
			id="skills"
			className="skillsSection__container"
		>
			{skillsList.map((e, i) => (
				<div
					key={i}
					className="skill"
				>
					<p>{e.skill.toUpperCase()}</p>

					<p>{e.expTime} Experience</p>
				</div>
			))}

			<Rings place={"rings-one"} />

			<div className="color__transition"></div>
		</div>
	);
}
