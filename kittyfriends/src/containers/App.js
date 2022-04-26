import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super()
        this.state = {
            kitties: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({kitties: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { kitties, searchfield } = this.state;
        const filteredKitties = kitties.filter(kitty => {
            return kitty.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (kitties.length === 0) {
            return <h1>Loading</h1>
        } else {}
            return (
                <div className="tc">
                    <h1>KittyFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList kitties={filteredKitties}/>
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>
        );
    }
}

export default App;