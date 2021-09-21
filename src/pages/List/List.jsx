import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HOUSES_STATE, SET_HOUSES, DELETE_HOUSE } from "../../store";
import { getAll, remove } from "../../services/houses.service";
import { ListItem, Wrapper } from "./List.styles";
import { Link } from "react-router-dom";
import { LogicPageTemplate } from "../../components/templates";

export default function List() {
	const dispatch = useDispatch();
	const { houses } = useSelector(HOUSES_STATE);
	const [message, setMessage] = useState("");

	const downloadHouses = useCallback(async () => {
		try {
			const {
				data: { results, error },
			} = await getAll();
			if (error === true) {
				throw new Error();
			}
			dispatch(SET_HOUSES(results));
		} catch (e) {
			setMessage(
				e.response?.data?.message ||
				e.response?.data?.error ||
				"Coś poszło nie tak"
			);
		}
	}, [dispatch]);
	const removeHouse = useCallback(
		async (id) => {
			try {
				setMessage("Usuwanie");
				const {
					status,
					data: { error },

				} = await remove(id);
				if (error === true || status !== 204) {
					throw new Error();
				}
				dispatch(DELETE_HOUSE(id));
				setMessage("Usunięto");
			} catch (e) {
				setMessage(
					e.response?.data?.message ||
					e.response?.data?.error ||
					"Coś poszło nie tak"
				);
			}
		},
		[dispatch]
	);
	useEffect(() => {
		downloadHouses();
	}, [downloadHouses]);

	return (
		<LogicPageTemplate>
			<Wrapper>
				{!houses && <h1> {message || "Pobieranie listy domów"}</h1>}
				{message && <h1>{message}</h1>}
				{houses &&
				houses.map(
					({
						 _id,
						 address,
						 floorsNumber,
						 description,
						 label,
					 }) => (
						<ListItem key={_id}>
							<p>Adres: {address}</p>
							<p>Piętra: {floorsNumber}</p>
							<p>Opis: {description}</p>
							<p>Etykieta: {label}</p>
							<button
								type="button"
								onClick={() => removeHouse(_id)}
							>
								Usuń
							</button>
							<Link to={"/details/" + _id}>
								Przejdź do szczegółów
							</Link>
						</ListItem>
					)
				)}
			</Wrapper>
		</LogicPageTemplate>
	);
}
