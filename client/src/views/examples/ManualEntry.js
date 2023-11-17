
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from 'react-router-dom';
import "./manualentry.css"
// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    Form,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Modal
} from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter.js";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class ManualEntry extends React.Component {
    state = {
        defaultModalAdd: false,
        notificationModal: false,
        defaultModalEdit: false
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {

        return (
            <>
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-sm section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Admin{" "}
                                                <span>Manual Entries to programs</span>
                                            </h1>
                                            <div className="btn-wrapper" style={{ marginTop: "60px" }}>
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    tag={Link} // Use the Link component
                                                    to="/"
                                                >

                                                    <span className="btn-inner--text">Program Page</span>
                                                </Button>

                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </Container>

                        </section>
                        <section>
                            <Button color="info" style={{ margin: '30px' }} onClick={() => this.toggleModal("defaultModalAdd")}>Add Program</Button>

                            <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModalAdd}
                                toggle={() => this.toggleModal("defaultModalAdd")}
                            >
                                <div className="modal-header">
                                    <h6 className="modal-title" id="modal-title-default">
                                        Add a Program
                                    </h6>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => this.toggleModal("defaultModalAdd")}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Form>

                                        <FormGroup>
                                            <p>Program Name</p>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Program"
                                                type="text"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Program Type</p>
                                            <div className="custom-control custom-radio mb-3">
                                                <input
                                                    className="custom-control-input"
                                                    id="customRadio5"
                                                    name="custom-radio-2"
                                                    type="radio"
                                                />
                                                <label className="custom-control-label" htmlFor="customRadio5">
                                                    Gas
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio mb-3">
                                                <input
                                                    className="custom-control-input"
                                                    id="customRadio5"
                                                    name="custom-radio-2"
                                                    type="radio"
                                                />
                                                <label className="custom-control-label" htmlFor="customRadio5">
                                                    Electricity
                                                </label>
                                            </div>
                                        </FormGroup>

                                        <FormGroup>
                                            <p>Program Link</p>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="www.google.com"
                                                type="text"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <p>Program Brief</p>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="Provide a Brief Description of the program"
                                                type="textarea"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Anual Electricity Budget</p>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="100k"
                                                type="number"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Anual Gas Budget</p>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="100k"
                                                type="number"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Minimum Energy Consumption</p>
                                            <Input
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="1000 Kwh"
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Form>
                                </div>
                                <div className="modal-footer">
                                    <Button color="primary" type="button">
                                        Save changes
                                    </Button>
                                    <Button
                                        className="ml-auto"
                                        color="link"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => this.toggleModal("defaultModalAdd")}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Modal>
                        </section>
                        <section style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: '30px' }}>
                            <div>
                                <h2>Program Details:</h2>

                                <table>
                                    <tr>
                                        <th>Program Name</th>
                                        <th>Program Type</th>
                                        <th>Program Link</th>
                                        <th>Program Brief</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>Peter</td>
                                        <td>Griffin</td>
                                        <td>$100</td>
                                        <td>Abcde</td>
                                        <td>
                                            <Button color="danger" onClick={() => this.toggleModal("notificationModal")}>Delete</Button>
                                            <Modal
                                                className="modal-dialog-centered modal-danger"
                                                contentClassName="bg-gradient-danger"
                                                isOpen={this.state.notificationModal}
                                                toggle={() => this.toggleModal("notificationModal")}
                                            >
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-notification">
                                                        Your attention is required
                                                    </h6>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("notificationModal")}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="py-3 text-center">
                                                        <i className="ni ni-bell-55 ni-3x" />
                                                        <h4 className="heading mt-4">Delete this program</h4>
                                                        <p>
                                                            Are you sure you want to permently delete this entry?
                                                            It won't revert back.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button className="btn-white" color="default" type="button">
                                                        Yes, Delete
                                                    </Button>
                                                    <Button
                                                        className="text-white ml-auto"
                                                        color="link"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("notificationModal")}
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </Modal>
                                            <Button color="info" onClick={() => this.toggleModal("defaultModalEdit")}>Edit</Button>
                                            <Modal
                                                className="modal-dialog-centered"
                                                isOpen={this.state.defaultModalEdit}
                                                toggle={() => this.toggleModal("defaultModalEdit")}
                                            >
                                                <div className="modal-header">
                                                    <h6 className="modal-title" id="modal-title-default">
                                                        Edit a Program
                                                    </h6>
                                                    <button
                                                        aria-label="Close"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("defaultModalEdit")}
                                                    >
                                                        <span aria-hidden={true}>×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <Form>

                                                        <FormGroup>
                                                            <p>Program Name</p>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="exampleFormControlInput1"
                                                                placeholder="ABC Program"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <p>Program Type</p>
                                                            <div className="custom-control custom-radio mb-3">
                                                                <input
                                                                    className="custom-control-input"
                                                                    id="customRadio5"
                                                                    name="custom-radio-2"
                                                                    type="radio"
                                                                />
                                                                <label className="custom-control-label" htmlFor="customRadio5">
                                                                    Gas
                                                                </label>
                                                            </div>
                                                            <div className="custom-control custom-radio mb-3">
                                                                <input
                                                                    className="custom-control-input"
                                                                    id="customRadio5"
                                                                    name="custom-radio-2"
                                                                    type="radio"
                                                                />
                                                                <label className="custom-control-label" htmlFor="customRadio5">
                                                                    Electricity
                                                                </label>
                                                            </div>
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <p>Program Link</p>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="exampleFormControlInput1"
                                                                placeholder="www.google.com"
                                                                type="text"
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <p>Program Brief</p>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="exampleFormControlInput1"
                                                                placeholder="abcd"
                                                                type="textarea"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <p>Anual Electricity Budget</p>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="exampleFormControlInput1"
                                                                placeholder="100k"
                                                                type="number"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <p>Anual Gas Budget</p>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="exampleFormControlInput1"
                                                                placeholder="100k"
                                                                type="number"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <p>Minimum Energy Consumption</p>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="exampleFormControlInput1"
                                                                placeholder="1000 Kwh"
                                                                type="number"
                                                            />
                                                        </FormGroup>
                                                    </Form>
                                                </div>
                                                <div className="modal-footer">
                                                    <Button color="primary" type="button">
                                                        Save changes
                                                    </Button>
                                                    <Button
                                                        className="ml-auto"
                                                        color="link"
                                                        data-dismiss="modal"
                                                        type="button"
                                                        onClick={() => this.toggleModal("defaultModalEdit")}
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </section>
                    </div>
                    <SimpleFooter />
                </main>

            </>
        );
    }
}

export default ManualEntry;
