import { HomeTemplate } from "../../components/templates";
import {
	BottomLeftContent,
	BottomRightContent,
	TopLeftContent,
	TopRightContent,
} from "./Home.styles";
import { Article } from "../../components/organisms";
import { useMemo } from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/atoms";
import { BoxBackgroundImg } from "../../components/molecules";
import data from "./Home.data";

export default function Home() {
	const history = useHistory();

	const { topRight, topLeft, bottomRight, bottomLeft } = useMemo(
		() => data,
		[]
	);
	return (
		<HomeTemplate>
			<TopLeftContent>
				<Article {...topLeft}>
					<Button onClick={() => history.push("/list")}>
						ZOBACZ WIĘCEJ
					</Button>
				</Article>
			</TopLeftContent>
			<TopRightContent>
				{topRight.map((item, index) => (
					<BoxBackgroundImg
						{...item}
						key={"BoxItemTopRight" + index}
					/>
				))}
			</TopRightContent>
			<BottomRightContent>
				<BoxBackgroundImg {...bottomLeft} />
			</BottomRightContent>
			<BottomLeftContent>
				<Article {...bottomRight}>
					<Button onClick={() => history.push("/add")}>
						ZOBACZ WIĘCEJ
					</Button>
				</Article>
			</BottomLeftContent>
		</HomeTemplate>
	);
}
