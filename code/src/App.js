import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const {isLoading, error, sendRequest: fetchTasks} = useHttp();

    useEffect(() => {

        const configHttp = {
            url: 'https://react-http-api-efe38-default-rtdb.firebaseio.com/tasks.json',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const showTasks = (data) => {
            const loadedTasks = [];
            for (const taskKey in data) {
                loadedTasks.push({id: taskKey, text: data[taskKey].text});
            }
            setTasks(loadedTasks);
        }

        fetchTasks(configHttp, showTasks);

    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler}/>
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
