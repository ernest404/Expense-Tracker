import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //allows us to pass the className for Card our custom component to the className of div in our Card component.
  return <div className={classes}>{props.children}</div>; //props.children is reserved keyword, it represents content in between tags of this component.Enables us to create wrapper components.
}

export default Card;
