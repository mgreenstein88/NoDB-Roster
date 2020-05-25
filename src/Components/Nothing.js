import React, {Component} from 'react'
import axios from 'axios'

class Finder extends Component{
    constructor(){
        super()

        this.state = {
            existingRoster: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        axios.get('/api/players').then((res) => {
            this.setState({
                existingRoster: res.data,
            })
        })
    }
    render() {
        return <div>Finder</div>
    }
}
export default Finder