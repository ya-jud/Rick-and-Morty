import axios from "axios";

const url_api = "https://rickandmortyapi.com/api/"

export function get_episode(id_episode: number) {
    axios
    .get(url_api + "episode/" + id_episode)
    .then((response) => {
        return response.data
    })
}

export function get_episode_list(season_number: number) {
    axios
    .get(url_api + "episode/?episode=S0" + season_number)
    .then((response) => {
        return response.data
    })
}
