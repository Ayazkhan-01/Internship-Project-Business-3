
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
        defaultModalEdit: false,
        data: [],
        id: null,
        program_name: null,
        program_type: null,
        program_link: null,
        program_brief: null,
        annual_ele_budget: null,
        min_ele_consumption: null,
        anual_gas_budget: null,
        min_energy_consumption: null
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
        this.loader()
    }
    loader() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/manualentry/getmanualentry", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({ data: result })
            })
            .catch(error => console.log('error', error));
    }
    handleSubmit() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = {
            "name": this.state.program_name,
            "link": this.state.program_link,
            type: this.state.program_type,
            description: this.state.program_brief,
            annual_ele_budget: this.state.annual_ele_budget,
            min_ele_consumption: this.state.min_energy_consumption,
            anual_gas_budget: this.state.anual_gas_budget,
            min_energy_consumption: this.state.min_energy_consumption
        };

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("http://localhost:8000/manualentry/postmanualentry", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.statusCode === "200") {
                    this.setState({ searchResult: result.body, displaySearchResult: true })
                    this.scrollToResult()
                }
            })
            .catch(error => console.log('error', error));

    }
    handleDelete() {
        // this.toggleModal("notificationModal")

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = {
            id: this.state.id
        };

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("http://localhost:8000/manualentry/deleteentry", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.loader()
            })
            .catch(error => console.log('error', error));

    }
    handleUpdate() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = {
            id: this.state.id,
            "name": this.state.program_name,
            "link": this.state.program_link,
            type: this.state.program_type,
            description: this.state.program_brief,
            annual_ele_budget: this.state.annual_ele_budget,
            min_ele_consumption: this.state.min_energy_consumption
            , anual_gas_budget: this.state.anual_gas_budget, min_energy_consumption: this.state.min_energy_consumption
        };

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("http://localhost:8000/manualentry/updatemanualentry", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                // if (result.statusCode === "200") {
                this.setState({ searchResult: result.body, displaySearchResult: true, defaultModalEdit: false })
                // this.scrollToResult()
                this.loader()
                // }
            })
            .catch(error => console.log('error', error));

    }
    handleSearch(val) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                partialProgramName: val
            }),
            redirect: 'follow'
        };

        fetch("http://localhost:8000/programs/search", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({ data: result })
            })
            .catch(error => console.log('error', error));

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
                                                value={this.state.program_name}
                                                onChange={(e) => { this.setState({ program_name: e.target.value }) }}
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
                                                    checked={this.state.program_type === "gas"}
                                                    value={"gas"}
                                                    onChange={() => this.setState({ program_type: "gas" })}
                                                    className="custom-control-input"
                                                    type="radio"
                                                    id="customRadioGas"
                                                />
                                                <label className="custom-control-label" htmlFor="customRadioGas">
                                                    Gas
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio mb-3">
                                                <input
                                                    checked={this.state.program_type === "electricity"}
                                                    value={"electricity"}
                                                    onChange={(e) => this.setState({ program_type: "electricity" })}
                                                    className="custom-control-input"
                                                    type="radio"
                                                    id="customRadioElectricity"
                                                />
                                                <label className="custom-control-label" htmlFor="customRadioElectricity">
                                                    Electricity
                                                </label>
                                            </div>
                                        </FormGroup>


                                        <FormGroup>
                                            <p>Program Link</p>
                                            <Input
                                                value={this.state.program_link}
                                                onChange={(e) => { this.setState({ program_link: e.target.value }) }}
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="www.google.com"
                                                type="text"
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <p>Program Brief</p>
                                            <Input
                                                value={this.state.program_brief}
                                                onChange={(e) => { this.setState({ program_brief: e.target.value }) }}
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="abcd"
                                                type="textarea"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Anual Electricity Budget</p>
                                            <Input
                                                value={this.state.annual_ele_budget}
                                                onChange={(e) => { this.setState({ annual_ele_budget: e.target.value }) }}
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="100k"
                                                type="number"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Anual Gas Budget</p>
                                            <Input
                                                value={this.state.anual_gas_budget}
                                                onChange={(e) => { this.setState({ anual_gas_budget: e.target.value }) }}
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="100k"
                                                type="number"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Minimum Energy Consumption</p>
                                            <Input
                                                value={this.state.min_energy_consumption}
                                                onChange={(e) => { this.setState({ min_energy_consumption: e.target.value }) }}
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="1000 Kwh"
                                                type="number"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Minimum Electricity Consumption</p>
                                            <Input
                                                value={this.state.min_ele_consumption}
                                                onChange={(e) => { this.setState({ min_ele_consumption: e.target.value }) }}
                                                className="form-control-alternative"
                                                id="exampleFormControlInput1"
                                                placeholder="1000 Kwh"
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Form>
                                </div>
                                <div className="modal-footer">
                                    <Button color="primary" type="button" onClick={() => { this.handleSubmit() }}>
                                        Save changes
                                    </Button>
                                    <Button
                                        className="ml-auto"
                                        color="link"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => { this.toggleModal("defaultModalAdd") }}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Modal>
                        </section>
                        <section style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: '30px' }}>
                            <div>
                                <Row>
                                    <Col>
                                        <h2>Program Details:</h2>
                                    </Col>
                                    <Col></Col>
                                    <Col>
                                        <Input
                                            type="text"
                                            placeholder="Serach by Program Name..."
                                            value={this.state.searchValue}
                                            onChange={(e) => { this.handleSearch(e.target.value); this.setState({ searchValue: e.target.value }) }}
                                        />
                                    </Col>
                                </Row>


                                <table>
                                    <tr>
                                        <th>Program Name</th>
                                        <th>Program Type</th>
                                        <th>Program Link</th>
                                        <th>Program Brief</th>
                                        <th>Action</th>
                                    </tr>
                                    {
                                        this.state.data.map((item) => (
                                            <>
                                                <tr>
                                                    <td>{item.program_name}</td>
                                                    <td>{item.program_type}</td>
                                                    <td>{item.program_link}</td>
                                                    <td>{item.program_brief}</td>
                                                    <td>
                                                        <Button color="danger" onClick={() => { this.setState({ id: item.pid }); this.toggleModal("notificationModal") }}>Delete</Button>
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
                                                                <Button
                                                                    onClick={() => { this.handleDelete() }}
                                                                    className="btn-white" color="default" type="button">
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
                                                        <Button color="info" onClick={() => {
                                                            this.setState({
                                                                program_type: item.program_type,
                                                                program_name: item.program_name,
                                                                program_link: item.program_link,
                                                                program_brief: item.program_brief,
                                                                min_ele_consumption: item.min_ele_consumption,
                                                                min_energy_consumption: item.min_energy_consumption,
                                                                anual_gas_budget: item.anual_gas_budget,
                                                                annual_ele_budget: item.annual_ele_budget,
                                                                id: item.pid
                                                            })
                                                            this.toggleModal("defaultModalEdit")
                                                        }}>Edit</Button>
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
                                                                            value={this.state.program_name}
                                                                            onChange={(e) => { this.setState({ program_name: e.target.value }) }}
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
                                                                                checked={this.state.program_type === "gas"}
                                                                                value={"gas"}
                                                                                onChange={() => this.setState({ program_type: "gas" })}
                                                                                className="custom-control-input"
                                                                                type="radio"
                                                                                id="customRadioGas"
                                                                            />
                                                                            <label className="custom-control-label" htmlFor="customRadioGas">
                                                                                Gas
                                                                            </label>
                                                                        </div>
                                                                        <div className="custom-control custom-radio mb-3">
                                                                            <input
                                                                                checked={this.state.program_type === "electricity"}
                                                                                value={"electricity"}
                                                                                onChange={(e) => this.setState({ program_type: "electricity" })}
                                                                                className="custom-control-input"
                                                                                type="radio"
                                                                                id="customRadioElectricity"
                                                                            />
                                                                            <label className="custom-control-label" htmlFor="customRadioElectricity">
                                                                                Electricity
                                                                            </label>
                                                                        </div>
                                                                    </FormGroup>


                                                                    <FormGroup>
                                                                        <p>Program Link</p>
                                                                        <Input
                                                                            value={this.state.program_link}
                                                                            onChange={(e) => { this.setState({ program_link: e.target.value }) }}
                                                                            className="form-control-alternative"
                                                                            id="exampleFormControlInput1"
                                                                            placeholder="www.google.com"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>

                                                                    <FormGroup>
                                                                        <p>Program Brief</p>
                                                                        <Input
                                                                            value={this.state.program_brief}
                                                                            onChange={(e) => { this.setState({ program_brief: e.target.value }) }}
                                                                            className="form-control-alternative"
                                                                            id="exampleFormControlInput1"
                                                                            placeholder="abcd"
                                                                            type="textarea"
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <p>Anual Electricity Budget</p>
                                                                        <Input
                                                                            value={this.state.annual_ele_budget}
                                                                            onChange={(e) => { this.setState({ annual_ele_budget: e.target.value }) }}
                                                                            className="form-control-alternative"
                                                                            id="exampleFormControlInput1"
                                                                            placeholder="100k"
                                                                            type="number"
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <p>Anual Gas Budget</p>
                                                                        <Input
                                                                            value={this.state.anual_gas_budget}
                                                                            onChange={(e) => { this.setState({ anual_gas_budget: e.target.value }) }}
                                                                            className="form-control-alternative"
                                                                            id="exampleFormControlInput1"
                                                                            placeholder="100k"
                                                                            type="number"
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <p>Minimum Energy Consumption</p>
                                                                        <Input
                                                                            value={this.state.min_energy_consumption}
                                                                            onChange={(e) => { this.setState({ min_energy_consumption: e.target.value }) }}
                                                                            className="form-control-alternative"
                                                                            id="exampleFormControlInput1"
                                                                            placeholder="1000 Kwh"
                                                                            type="number"
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <p>Minimum Electricity Consumption</p>
                                                                        <Input
                                                                            value={this.state.min_ele_consumption}
                                                                            onChange={(e) => { this.setState({ min_ele_consumption: e.target.value }) }}
                                                                            className="form-control-alternative"
                                                                            id="exampleFormControlInput1"
                                                                            placeholder="1000 Kwh"
                                                                            type="number"
                                                                        />
                                                                    </FormGroup>
                                                                </Form>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <Button color="primary" type="button" onClick={() => { this.handleUpdate(); }}>
                                                                    Save changes
                                                                </Button>
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="link"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => { this.toggleModal("defaultModalEdit") }}
                                                                >
                                                                    Close
                                                                </Button>
                                                            </div>
                                                        </Modal>
                                                    </td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                    {/* <tr>
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
                                    </tr> */}
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
