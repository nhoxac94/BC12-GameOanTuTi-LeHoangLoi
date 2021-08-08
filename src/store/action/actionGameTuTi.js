import {KEO_BUA_BAO, PLAY_GAME_TU_TI} from '../const/gameTuTiConst'

export const actPlayerSelect = (selection) => ({
    type : KEO_BUA_BAO,
    payload : selection
})

export const actPlayGameTuTi = () => ({
    type : PLAY_GAME_TU_TI,
})