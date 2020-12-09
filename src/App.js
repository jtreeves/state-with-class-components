import './App.css'
import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            inputtedNumber: 0
        }
    }
    
    increment = () => {
        const newCount = this.state.count + this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    decrement = () => {
        const newCount = this.state.count - this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    multiply = () => {
        const newCount = this.state.count * this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    divide = () => {
        const newCount = this.state.count / this.state.inputtedNumber
        this.setState({ count: newCount })
    }

    changeInput = (event) => {
        const newValue = parseInt(event.target.value) || 0
        this.setState({ inputtedNumber: newValue })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input type='number' value={this.state.inputtedNumber} onChange={this.changeInput} />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        )
    }
}

export default App