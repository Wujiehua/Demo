import {RECEIVE_ALLINFO, RECEIVE_SHOPS} from './mutation-types'
export default {
    [RECEIVE_ALLINFO] (state, {allInfo}) {
        state.allInfo = allInfo
    },
    [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
    }
}
