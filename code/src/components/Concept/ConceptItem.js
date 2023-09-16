import './ConceptItem.css';
function ConceptItem({title, image, description}) {
    return (
        <div className="concept">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
export default ConceptItem;