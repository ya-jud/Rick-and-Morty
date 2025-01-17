import { fetchClient } from "../shared/fetchClient.ts";
import { API_ROUTES } from "../shared/endpoints.ts";

export const getLocations = async (): Promise<string[]> => {
	const response = await fetchClient.get(API_ROUTES.LOCATIONS);
	return response.data;
}

export const getLocation = async (id: number): Promise<string[]> => {
	const response = await fetchClient.get(`${API_ROUTES.LOCATIONS}/${id}`);
	return response.data;
}