import "./styles.css";
import Playercard from "./Playercard";
import data from "./Data.json";

export default function App() {
    return (
        <div className="App">
            {data.map((data) => (
                <Playercard
                    Player={data.Player}
                    Span={data.Span}
                    Mat={data.Mat}
                    Runs={data.Runs}
                />
            ))}
        </div>
    );
}
