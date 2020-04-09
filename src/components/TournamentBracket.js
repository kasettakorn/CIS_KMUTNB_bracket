import React, { Component } from 'react';
import _ from 'lodash';
import '../styles/Tournament.scss';


class TournamentBracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: "",
            qfArray: new Array(4),
            fArray: new Array(2)
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickQF = this.handleClickQF.bind(this);
        this.handleClickFinal = this.handleClickFinal.bind(this);
    }
    handleClick = (value, i) => {
        const { qfArray } = this.state;
        const newqfArray = _.cloneDeep(qfArray);
        newqfArray[i] = value;
        this.setState({
            qfArray: newqfArray
        })
    }
    handleClickQF = (i, group) => {
        const { fArray, qfArray } = this.state;
        const newfArray = _.cloneDeep(fArray);
        newfArray[group] = qfArray[i];
        this.setState({
            fArray: newfArray
        })
    }
    handleClickFinal = i => {
        this.setState({
            winner: this.state.fArray[i]
        })
    }
    render() {
        const { qfArray, fArray, winner } = this.state;
        return (
            <div className="wrapper">
                <div className="item">
                    <div className="item-parent">
                        <p style={{fontWeight:"700"}}><span>👑</span> {winner}</p>
                    </div>
                    <div className="item-childrens">
                        <div className="item-child">
                            <div className="item">
                                <div onClick={()=>this.handleClickFinal(0)} className="item-parent">
                                    <p>{fArray[0]}</p>
                                </div>
                                <div className="item-childrens">
                                    <div className="item-child">
                                        <div className="item">
                                            <div onClick={()=>this.handleClickQF(0, 0)} className="item-parent">
                                                <p>{qfArray[0]}</p>
                                            </div>
                                            <div className="item-childrens">
                                                <div onClick={()=>this.handleClick("Fund. Com", 0)} className="item-child">
                                                    <p>Fund. Com</p>
                                                </div>
                                                <div onClick={()=>this.handleClick("Digital 1-2", 0)} className="item-child">
                                                    <p>Digital 1-2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-child">
                                        <div className="item">
                                            <div onClick={()=>this.handleClickQF(1, 0)} className="item-parent">
                                                <p>{qfArray[1]}</p>
                                            </div>
                                            <div className="item-childrens">
                                                <div onClick={()=>this.handleClick("Algorithms", 1)} className="item-child">
                                                    <p>Algorithms</p>
                                                </div>
                                                <div onClick={()=>this.handleClick("Data structure", 1)} className="item-child">
                                                    <p>Data structure</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-child">
                            <div className="item">
                                <div onClick={()=>this.handleClickFinal(1)} className="item-parent">
                                    <p>{fArray[1]}</p>
                                </div>
                                <div className="item-childrens">
                                    <div className="item-child">
                                        <div className="item">
                                            <div onClick={()=>this.handleClickQF(2, 1)} className="item-parent">
                                                <p>{qfArray[2]}</p>
                                            </div>
                                            <div className="item-childrens">
                                                <div onClick={()=>this.handleClick("SA", 2)} className="item-child">
                                                    <p>SA</p>
                                                </div>
                                                <div onClick={()=>this.handleClick("SE", 2)} className="item-child">
                                                    <p>SE</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item-child">
                                        <div className="item">
                                            <div onClick={()=>this.handleClickQF(3, 1)} className="item-parent">
                                                <p>{qfArray[3]}</p>
                                            </div>
                                            <div className="item-childrens">
                                                <div onClick={()=>this.handleClick("OOP", 3)} className="item-child">
                                                    <p>OOP</p>
                                                </div>
                                                <div onClick={()=>this.handleClick("Networks", 3)} className="item-child">
                                                    <p>Networks</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default TournamentBracket
