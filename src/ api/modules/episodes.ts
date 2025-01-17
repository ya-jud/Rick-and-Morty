import { fetchClient } from "../shared/fetchClient.ts";
import { API_ROUTES } from "../shared/endpoints.ts";

export const getEpisodes = async (): Promise<string[]> => {
	const response = await fetchClient.get(API_ROUTES.EPISODES);
	return response.data;
}

export const getEpisode = async (id: number): Promise<string[]> => {
	const response = await fetchClient.get(`${API_ROUTES.EPISODES}/${id}`);
	return response.data;
}