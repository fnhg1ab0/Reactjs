import './Concepts.css';
import ConceptItem from "./ConceptItem";
function Concepts(props){
    return(
        <div className="concepts">
            <ConceptItem
                title={props.items[0].title}
                image={props.items[0].image}
                description={props.items[0].description}
            />
            <ConceptItem
                title={props.items[1].title}
                image={props.items[1].image}
                description={props.items[1].description}
            />
            <ConceptItem
                title={props.items[2].title}
                image={props.items[2].image}
                description={props.items[2].description}
            />
        </div>
    );
}
export default Concepts;