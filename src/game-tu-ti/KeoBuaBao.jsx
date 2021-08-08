import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actPlayerSelect } from '../store/action/actionGameTuTi';

class KeoBuaBao extends Component {
    render() {
        const { playerChoice, playerSelect } = this.props;
        return (
            <div className="keoBuaBao">
                <img
                    className={playerChoice.choice === 'Keo' ? 'keoBuaBaoSelected' : ''}
                    src="./images/game-tu-ti/keo.png" alt="" width="50px"
                    onClick={() => playerSelect('Keo')}
                />
                <img
                    className={playerChoice.choice === 'Bua' ? 'keoBuaBaoSelected' : ''}
                    src="./images/game-tu-ti/bua.png" alt="" width="50px"
                    onClick={() => playerSelect('Bua')}
                />
                <img
                    className={playerChoice.choice === 'Bao' ? 'keoBuaBaoSelected' : ''}
                    src="./images/game-tu-ti/bao.png" alt="" width="50px"
                    onClick={() => playerSelect('Bao')}
                />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    playerSelect: (selection) => {
        dispatch(actPlayerSelect(selection))
    }
})

export default connect(null, mapDispatchToProps)(KeoBuaBao)