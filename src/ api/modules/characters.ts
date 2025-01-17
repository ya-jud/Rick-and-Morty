import { fetchClient } from "../shared/fetchClient.ts";
import { API_ROUTES } from "../shared/endpoints.ts";

export const getCharacters = async (): Promise<string[]> => {
	const response = await fetchClient.get(API_ROUTES.CHARACTERS);
	return response.data;
}

export const getCharacter = async (id: number): Promise<string[]> => {
	const response = await fetchClient.get(`${API_ROUTES.CHARACTERS}/${id}`);
	return response.data;
}