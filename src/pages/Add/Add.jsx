import { useCallback, useMemo, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { LogicPageTemplate } from "../../components/templates";
import { Form } from "./Add.styles";
import { Label } from "../../components/molecules";
import { Button } from "../../components/atoms";
import { create } from "../../services/houses.service";

export default function Add() {
	const [message, setMessage] = useState();

	const { validationSchema, fields } = useMemo(
		() => ({
			validationSchema: yup.object().shape({
				address: yup
					.string()
					.min(3, "Za krótkie")
					.max(250, "Za długie")
					.required("Wymagane"),
				floorsNumber: yup
					.number()
					.integer("Musi być liczbą całkowitą")
					.positive()
					.strict(),
				description: yup
					.string()
					.min(3, "Za krótkie")
					.max(250, "Za długie")
					.required("Wymagane"),
				label: yup
					.string()
					.min(3, "Za krótkie")
					.max(250, "Za długie")
					.required("Wymagane"),
			}),
			fields: [
				{
					name: "address",
					text: "Adres",
					type: "text",
					placeholder: "wymagane",
					required: true,
				},
				{
					name: "floorsNumber",
					text: "Liczba pięter",
					type: "number",
					placeholder: "wymagane",
					required: true,
				},
				{
					name: "description",
					text: "Opis",
					type: "text",
					placeholder: "wymagane",
					required: true,
				},
				{
					name: "label",
					text: "Etykieta",
					type: "text",
					placeholder: "wymagane",
					required: true,
				},
			],
		}),
		[],
	);
	const addHouse = useCallback(async (data, actions) => {
		try {
			setMessage("Dodawanie");
			const {
				data: { error },
			} = await create(data);
			if (error === true) {
				throw new Error();
			}
			actions.resetForm();
			setMessage("Dodano");
		} catch (e) {
			setMessage(
				e.response?.data?.message ||
					e.response?.data?.error ||
					"Coś poszło nie tak",
			);
		}
	}, []);
	const formik = useFormik({
		initialValues: {
			address: "",
			floorsNumber: 1,
			description: "",
			label: "",
		},
		validationSchema,
		onSubmit: async (values, actions) => addHouse(values, actions),
	});

	return (
		<LogicPageTemplate>
			<h1>{message}</h1>
			<Form onSubmit={formik.handleSubmit}>
				{fields.map((item, index) => (
					<Label
						key={item.name}
						{...item}
						{...formik.getFieldProps(item.name)}
						error={
							formik.touched[item.name] &&
							formik.errors[item.name] &&
							formik.errors[item.name]
						}
  />
				))}

				<Button
					disabled={formik.isSubmitting}
					additionalStyles={{ marginTop: "25px" }}
					type="submit"
  >
					Submit
  </Button>
  </Form>
  </LogicPageTemplate>
	);
}
