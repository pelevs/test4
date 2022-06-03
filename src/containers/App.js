import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';


const App = () => {
    const [searchField, setSearchField] = useState("")
    const [robotsList, setRobotsList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
                .then(users => setRobotsList(users))
        //setRobotsList(robots)
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robotsList.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    
    return  !robotsList.length ? 
    <h1 className='tc'>Loading...</h1> :
        (<div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>)
}
export default App