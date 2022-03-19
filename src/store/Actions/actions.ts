import { get_episode, get_episode_list } from '../api/episodes'
import vuex from 'vuex'

export default new vuex.Store({
    actions: {
        give_episode(state, id_episode: number) {
            get_episode(id_episode)
        },
        give_episode_list(state ,season_number: number) {
            get_episode_list(season_number)
        }
    }
})
