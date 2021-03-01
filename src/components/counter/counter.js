import React from 'react';
import './counter.css';
import Vector from '../../img/Vector.png';
import Minus from '../../img/Minus.png';
import Group from '../../img/Group.png';
import { connect } from 'react-redux';
import * as actions from '../../actions';
//import { bindActionCreators } from 'redux';
 
const Counter = ({counter, inc, dec, refr}) => {
    return (
        <div className="app">
            <div className="counter">{counter}</div>
            <div className="btns">
                <button                    
                    className="btns-dec"                                      
                    onClick={inc}
                    style={{ backgroundColor: '#089C20' }}
                >
                    <img src={Vector} />
                </button>
                <button                    
                    className="btns-dec"
                    style={{ backgroundColor: '#E7AA10' }}
                    onClick={dec}
                >
                    <img src={Minus} />
                </button>
                <button                    
                    className="btns-dec"
                    style={{ backgroundColor: '#CF1C1C' }}
                    onClick={refr}
                >
                    <img src={Group} />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);