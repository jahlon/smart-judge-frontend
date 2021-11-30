import './App.css';
import 'react-tabs/style/react-tabs.css';
import {Component} from "react";
import {Container, Navbar} from "react-bootstrap";
import {slide as Menu} from 'react-burger-menu'
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs'
import ReactFlow, {addEdge, MiniMap, removeElements} from "react-flow-renderer";
import EvidenceNode from "./EvidenceNode";
import FactNode from "./FactNode";
import HypothesisNode from "./HypothesisNode";


class App extends Component {

    constructor(props) {
        super(props)

         const initialElements = [
            {
                id: '1',
                type: 'fact',
                data: {text: 'This is a Fact Node'},
                position: {x: 100, y: 100},
            },
            {
                id: '2',
                type: 'evidence',
                position: {x: 300, y: 100},
                data: {text: 'This is an Evidence Node'},
            },
            {
                id: '3',
                type: 'hypothesis',
                position: {x: 500, y: 100},
                data: {text: 'This is a Hypothesis Node'},
            },
             {
                id: '4',
                type: 'fact',
                data: {text: 'This is a Fact Node'},
                position: {x: 100, y: 100},
            },
            {
                id: '5',
                type: 'evidence',
                position: {x: 300, y: 100},
                data: {text: 'This is an Evidence Node'},
            },
            {
                id: '6',
                type: 'evidence',
                position: {x: 300, y: 100},
                data: {text: 'This is an Evidence Node'},
            },
            {
                id: '7',
                type: 'evidence',
                position: {x: 300, y: 100},
                data: {text: 'This is an Evidence Node'},
            },
        ];

        this.state = {
            elements: initialElements
        }

        this.onElementsRemove = this.onElementsRemove.bind(this)
        this.onConnect = this.onConnect.bind(this)
    }

    onElementsRemove = (elementsToRemove) => {
        this.setState({elements: removeElements(elementsToRemove, this.state.elements)})
    }

    onConnect = (params) => {
        this.setState({elements: addEdge(params, this.state.elements)})
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        const nodeTypes = {
            evidence: EvidenceNode,
            fact: FactNode,
            hypothesis: HypothesisNode,
        };
        return (
            <div className="App vh-100 bg-dark">
                <Navbar className="justify-content-start shadow" bg="dark" variant="dark">
                    <Menu width={'300px'}>
                        <a id="file" href="/">
                            <i className="bi bi-file-earmark-plus"/>
                            <span>Nuevo proceso</span>
                        </a>
                        <a id="file" href="/">
                            <i className="bi bi-folder2-open"/>
                            <span>Abrir proceso</span>
                        </a>
                        <a id="file" href="/">
                            <i className="bi bi-save"/>
                            <span>Guardar</span>
                        </a>
                        <a id="file" href="/">
                            <i className="bi bi-save-fill"/>
                            <span>Guardar como</span>
                        </a>
                        <a id="file" href="/">
                            <i className="bi bi-file-earmark-x"/>
                            <span>Cerrar proceso</span>
                        </a>
                        <a id="file" href="/">
                            <i className="bi bi-card-list"/>
                            <span>Administrar procesos</span>
                        </a>
                    </Menu>
                    <Container className="ms-1">
                        <Navbar.Brand>
                            <img
                                src="judge.ico"
                                className="d-inline-block align-top"
                                width="30"
                                height="30"
                                alt="Smart Judge Logo"
                                />{'  '}
                            <span className="d-inline-block align-middle brand-text">JUEZ INTELIGENTE</span>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <div className="container-fluid m-0 p-0 canvas-container">
                    <Tabs
                        selectedTabClassName="process-tab--selected"
                        selectedTabPanelClassName="process-tab-panel--selected"
                        className="container-fluid m-0 p-0 h-100">
                        <TabList>
                            <Tab className="process-tab">Proceso 1</Tab>
                            <Tab className="process-tab">Proceso 2</Tab>
                            <Tab className="process-tab">Proceso 3</Tab>
                        </TabList>
                        <TabPanel className="process-tab-panel m-0 p-0 canvas-container">
                            <ReactFlow
                                elements={this.state.elements}
                                onElementsRemove={this.onElementsRemove}
                                onConnect={this.onConnect}
                                deleteKeyCode={46}
                                nodeTypes={nodeTypes}
                                minZoom={0.2}
                            >
                                <MiniMap
                                    nodeColor={(n) => {
                                        if (n.type === 'evidence') return '#db5461';
                                        if (n.type === 'fact') return '#8AA29E';
                                        if (n.type === 'hypothesis') return '#9893DA';
                                    }}
                                />
                            </ReactFlow>
                        </TabPanel>
                        <TabPanel className="process-tab-panel" style={{color: 'white'}}>
                            Otro proceso
                        </TabPanel>
                        <TabPanel className="process-tab-panel" style={{color: 'white'}}>
                            Otro proceso más
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}


export default App;
