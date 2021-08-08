import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinGame extends Component {
    render() {
        const { soBanThang, soBanChoi } = this.props;
        return (
            <div>
                <h1 className="text-success">Số bàn thằng :
                    <span className="text-warning"> {soBanThang}</span>
                </h1>
                <h1 className="text-success">Số bàn chơi :
                    <span className="text-warning"> {soBanChoi}</span>
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    soBanThang: state.gameTuTiReducer.soBanThang,
    soBanChoi: state.gameTuTiReducer.soBanChoi

})
export default connect(mapStateToProps)(ThongTinGame)