import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { LogicPageTemplate } from "../../components/templates";
import { remove, getById } from "../../services/houses.service";

export default function Details() {
	const { id } = useParams();
	const [state, setState] = useState(null);
	const [message, setMessage] = useState();
	const getHouseById = useCallback(async () => {
		try {
			const {
				data: { result, error },
			} = await getById(id);

			if (error === true) {
				throw new Error();
			}
			setState(result);
		} catch (e) {
			setMessage(
				e.response?.data?.message ||
					e.response?.data?.error ||
					"Coś poszło nie tak"
			);
		}
	}, [id]);

	const removeHouse = useCallback(async (id) => {
		try {
			setMessage("Usuwanie");
			const { status } = await remove(id);
			if (status !== 204) {
				throw new Error();
			}

			setMessage("Usunięto");
			setState(null);
		} catch (e) {
			setMessage(
				e.response?.data?.message ||
					e.response?.data?.error ||
					"Coś poszło nie tak"
			);
		}
	}, []);
	useEffect(() => {
		getHouseById();
	}, [getHouseById]);
	return (
		<LogicPageTemplate>
			{!state && <h1>{message || "Pobieranie"}</h1>}
			{state && (
				<div>
					<button
						type="button"
						onClick={() => removeHouse(state._id)}
					>
						Usuń
					</button>
					<p>Adres: {state.address}</p>
					<p>Piętra: {state.floorsNumber}</p>
					<p>Opis: {state.description}</p>
					<p>Etykieta: {state.label}</p>
				</div>
			)}
		</LogicPageTemplate>
	);
}
