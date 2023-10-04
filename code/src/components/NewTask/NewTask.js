import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {

    const addTask = (text, data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = {id: generatedId, text: text};

        props.onAddTask(createdTask);
    }

    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

    const enterTaskHandler = async (taskText) => {

        const configHttp = {
            url: 'https://react-http-api-efe38-default-rtdb.firebaseio.com/tasks.json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                text: taskText
            }
        };

        await sendTaskRequest(configHttp, addTask.bind(null, taskText));
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
