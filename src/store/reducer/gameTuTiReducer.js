import { KEO_BUA_BAO, PLAY_GAME_TU_TI } from "../const/gameTuTiConst";
const initialState = {
  playerChoice: { choice: "", img: "" },
  computerChoice: { choice: "", img: "" },
  soBanThang: 0,
  soBanChoi: 0,
  warningMess: '',
};
const gameTuTiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case KEO_BUA_BAO: {
      // Player chọn kéo búa bao
      const playerChoiceUpdate = {
        choice: payload,
        img: `./images/game-tu-ti/${payload}.png`,
      };
      return { ...state, playerChoice: playerChoiceUpdate };
    }

    case PLAY_GAME_TU_TI: {
      // Kiểm tra người dùng đã chọn chưa
      if (state.playerChoice.choice) {
        //Tạo hàm random
        const randomKeoBuaBao = () => {
          const randomNum = Math.floor(Math.random() * 3 + 1);
          if (randomNum === 1) {
            return "Keo";
          } else if (randomNum === 2) {
            return "Bua";
          } else if (randomNum === 3) {
            return "Bao";
          }
        };
        const computerRandom = randomKeoBuaBao();
        const updateComputerChoice = {
          choice: computerRandom,
          img: `./images/game-tu-ti/${computerRandom}.png`,
        };
        state.soBanChoi += 1;
        if (
          (state.playerChoice.choice === "Keo" &&
            updateComputerChoice.choice === "Bao") ||
          (state.playerChoice.choice === "Bua" &&
            updateComputerChoice.choice === "Keo") ||
          (state.playerChoice.choice === "Bao" &&
            updateComputerChoice.choice === "Bua")
        )
          state.soBanThang += 1;
        return { ...state, computerChoice: updateComputerChoice };
      } else {

        return {...state, warningMess: 'Choose your power!!!'};
        
      }
    }
    default:
      return state;
  }
};

export default gameTuTiReducer;
