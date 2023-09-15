import './Card.css';

function Card(props) {
    // add a new class to the existing classes when use the custom component
    const classes = 'card ' + props.className;
    // props.children is a special prop that every component receives automatically
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;