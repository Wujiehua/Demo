import {RECEIVE_ALLINFO, RECEIVE_SHOPS} from './mutation-types'
import {reqAll, reqShops} from '../api'
export default {
    async getAll ({ commit }) {
        const resultAll = await reqAll('V2ZVZg==')
        commit(RECEIVE_ALLINFO, {allInfo:resultAll[1]})
    },
    async getShops ({ commit }) {
        const shops = await reqShops('V2ZVZg==')
        commit(RECEIVE_SHOPS, {shops})
    }
}
