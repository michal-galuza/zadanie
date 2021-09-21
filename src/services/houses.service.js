import axiosInstance from "./axios";

export async function getAll() {
	return axiosInstance.get("/houses/all");
}

export async function create(data) {
	return axiosInstance.post("/houses", data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function getById(id) {
	return axiosInstance.get("/houses/" + encodeURIComponent(id));
}

export async function remove(id) {
	return axiosInstance.delete("/houses/" + encodeURIComponent(id));
}
