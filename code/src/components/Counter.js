import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter";
// import {connect} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter.count);
    const isShow = useSelector(state => state.counter.isShow);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {isShow &&
                <>
                    <div className={classes.value}>{counter}</div>
                    <div>
                        <button onClick={decrementHandler}>Decrement</button>
                        <button onClick={increaseHandler}>Increment by 5</button>
                        <button onClick={incrementHandler}>Increment</button>
                    </div>
                </>
            }
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;


// use connect() to connect the component to the Redux store with class-based components
// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }
//
//     decrementHandler() {
//         this.props.decrement();
//     }
//
//     toggleCounterHandler() {
//     }
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'}),
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
