import React, { Component } from 'react'
import NameList from '../array.js/NameList'
import Bola from './Bola'

 class Ona extends Component {
constructor(props) {
    super(props)

    this.state = {
         parantName:'cococola'
    }
}
getParant(childMame ){
    alert(`assalomualaykum ${this.state.parantName}dan ${childMame}}ga`)
}


    render() {
        return (
            <div>
             <Bola newParant={this.getParant.bind(this)}/>
             <NameList/>

            </div>
        )
    }
}

export default Ona
