import {Component} from "react";
import {Handle} from "react-flow-renderer";

class EvidenceNode extends Component {
    render() {
        return (
            <div className="container-fluid justify-content-center custom-node-evidence pb-0" >
                <div className="custom-node-title mb-2">{this.props.data.text}</div>
                <div className="custom-node-property-1-label">Pertinencia</div>
                <div className="custom-node-property-1-value p-2">Probable</div>
                <div className="custom-node-property-2-label">Credibilidad</div>
                <div className="custom-node-property-2-value p-2">Muy probable</div>
                <Handle type="target" position="top" style={{borderRadius: 5,  background: "white"}}/>
            </div>
        );
    }
}

export default EvidenceNode;