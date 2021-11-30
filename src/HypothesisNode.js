import {Component} from "react";
import {Handle} from "react-flow-renderer";

class HypothesisNode extends Component {
    render() {
        return (
            <div className="container-fluid justify-content-center custom-node-hypothesis pb-0" >
                <div className="custom-node-title mb-2">{this.props.data.text}</div>
                <div className="custom-node-property-2-label">Peso probatorio</div>
                <div className="custom-node-property-2-value p-2">Muy probable</div>
                <div className="row mt-3">
                    <div className="col favorable-handle">Favor</div>
                    <div className="col unfavorable-handle">Contra</div>
                </div>
                <Handle
                    type="source"
                    position="bottom"
                    id="a"
                    style={{left: '25%', borderRadius: 5, background: "white"}}
                />
                <Handle
                    type="source"
                    position="bottom"
                    id="b"
                    style={{ left: '75%', borderRadius: 5,  background: "white" }}
                />
            </div>
        );
    }
}

export default HypothesisNode;