import { Title } from "../../components/atoms";

const data = {
	topLeft: {
		title: "KILKA SŁÓW O NAS",
		subtitle: "CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY",
		description: [
			"What is Lorem Ipsum?  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			"What is Lorem Ipsum?  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		],
	},
	topRight: [
		{
			imgUrl: "https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000",
			children: (
				<img
					alt={"Random img"}
					src={
						"https://www.logolynx.com/images/logolynx/ca/caec3ebc94200aabb4a2c31891100f28.png"
					}
				/>
			),
		},
		{
			imgUrl: "https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000",
			backgroundColor: "transparent",
		},
		{
			imgUrl: "https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000",
			backgroundColor: "transparent",
		},
		{
			imgUrl: "https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000",
			children: (
				<p
					style={{
						padding: "0 10px",
						fontSize: "1.5rem",
						fontWeight: 500,
					}}
				>
					Loreipsum
					LoreipsumLoreipsumLoreipsumLoreipsumLoreipsumLoreipsumLoreipsumLoreipsumLoreipsumLoreipsum
				</p>
			),
		},
	],
	bottomLeft: {
		imgUrl: "https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000",
		children: [
			"BUDOWA DOMÓW Z DREWNA",
			"BUDOWA BRAM WJAZDOWYCH",
			"WYKOŃCZENIE WNĘTRZ",
			"ALTANY OGRODOWE",
			"kAMIENNE ELEMENTY ARCHITEKTURY",
			"REMONTY",
		].map((item) => (
			<Title
				text={item}
				key={item}
				additionalStyles={{
					fontSize: "1.3rem",
					margin: "8px 0",
				}}
			/>
		)),
	},
	bottomRight: {
		title: "NASZA OFERTA",
		subtitle: "DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ",
		description: [
			"What is Lorem Ipsum?  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			"What is Lorem Ipsum?  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		],
	},
};
export default data;
