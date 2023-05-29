import "./styles.css";

export default function PlayerCard(props) {
    return (
        <div className="playercard">
            <h4>{props.Player}</h4>
            <div className="playerdetails">
                <h6>{props.Span}</h6>
                <h6>Mat:{props.Mat}</h6>
                <h6>Runs:{props.Runs}</h6>
            </div>
        </div>
    );
}
