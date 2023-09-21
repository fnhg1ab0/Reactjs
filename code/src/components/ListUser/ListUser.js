import style from './ListUser.module.css';
import Card from '../UI/Card';

const ListUser = (props) => {
    return(
        <Card className={style.users}>
            <ul>
                {props.onShowUser.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old.)
                    </li>
                ))}
            </ul>
        </Card>
    );
}
export default ListUser;