import React, { Component } from 'react'
import ThongTinGame from './ThongTinGame'
import './assets/gameTuTi.css'
import KeoBuaBao from './KeoBuaBao'
import { connect } from 'react-redux'
import { actPlayGameTuTi } from '../store/action/actionGameTuTi'

class GameTuTi extends Component {
    render() {
        const { playerChoice, computerChoice, warningMess, playGameTuTi } = this.props;
        return (
            <div className="container-game text-center">
                <div className="container-fluid ">
                    <div className="row text-center justify-content-center">
                        <div className="col-4 mt-2">
                            <div className="speech-bubble">
                                {playerChoice.img ? <img src={playerChoice.img} alt="" />
                                    : (warningMess ? <div><span className=" text-danger warningMes">{warningMess}</span></div> : <div><span className="introduce">I'm Iron Man</span></div>)}
                            </div>
                            <img src="./images/game-tu-ti/player.png" alt="" width="35%" />
                            <KeoBuaBao playerChoice={playerChoice} />
                        </div>
                        <div className="col-3 ">
                            <h1 className="py-5 text-warning">I'm iron man, i love you 3000!</h1>
                            <ThongTinGame />
                        </div>
                        <div className="col-4 mt-2">
                            <div className="speech-bubble">
                                {computerChoice.img ? <img src={computerChoice.img} alt="" />
                                    : <div><span className="introduce">I'm Thốt Nốt</span></div>}
                            </div>
                            <img src="./images/game-tu-ti/playerComputer.png" alt="" width="35%" />
                        </div>
                    </div>
                </div>
                <button className="btn btn-success text-center"
                    onClick={playGameTuTi}
                >Play Game</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    playerChoice: state.gameTuTiReducer.playerChoice,
    computerChoice: state.gameTuTiReducer.computerChoice,
    warningMess: state.gameTuTiReducer.warningMess,

})

const mapDispatchToProps = (dispatch) => ({
    playGameTuTi: () => {
        dispatch(actPlayGameTuTi())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(GameTuTi)