import "./examples/sandpack/styles.css";
import "./examples/sandpack/playground.css";

import TextInput from "../../components/TextInput/TextInput"

export default function App() {
    return (
        <div className="playground">
            <TextInput
                onChange={(v) => console.log(v)}
                onSubmit={() => console.log("submitted")}
            />
        </div>
    );
}
