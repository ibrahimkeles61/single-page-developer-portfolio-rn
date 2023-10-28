import "./a__Welcome__Section.modules.css";
import Rings from "../components/Rings";
import Circle from "../components/Circle";
import ContactLinks from "../components/ContactLinks";
import StylishButton from "../components/StylishButton";
import DownArrow from "../components/DownArrow";

export default function WelcomeSection({ profilePicImg }) {
	return (
		<div className="welcomeSection__container">
			<p className="brand">ibrahimkeles</p>

			<div className="profile__card"></div>

			{profilePicImg}

			<div className="welcome__paragraph">
				<p>
					Nice to meet you! I&apos;m <span>İbrahim Keleş</span>.
				</p>

				<p>
					Based in the Turkey, I’m a front-end developer passionate about
					building accessible mobile apps that users love.
				</p>

				{/* <StylishButton value="contact me" /> */}
				<ContactLinks />
			</div>

			{/* <Rings positioning={"rings-one"} />
		<Rings positioning={"rings-two"} />
		<Rings positioning={"rings-three"} />
		<Circle positioning={"circle-one"} /> */}

			{/* <DownArrow /> */}
		</div>
	);
}
