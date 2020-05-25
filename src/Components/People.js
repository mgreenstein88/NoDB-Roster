import React, {Component} from 'react'

class People extends Component{
    constructor(){
        super()

        this.state = {
            userInput: ''
        }
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }
    handleSaveName(){
        const { data } = this.props
        this.props.editPlayerName(data.id, this.state.userInput)
    }
    render(){
        return (
            <div>
            <div className="Edits">
                <p className="number-style">{this.props.data.number}</p>
                <p className="name-style">{this.props.data.name}</p>
                <p className="position-style">{this.props.data.position}</p>
                <p className="age-style">{this.props.data.age}</p>
                    <div className="inputs">
                <input onChange={ (e) => this.handleChange(e)} placeholder="Change Name" type="text" value={this.state.name}/>
                <button onClick={() => this.handleSaveName()}>Edit Name</button>
                <button onClick={() => this.props.deletePlayer(this.props.data.id)}>Delete Player</button>
                    </div>
            </div>
            </div>
        )
    }
}

export default People