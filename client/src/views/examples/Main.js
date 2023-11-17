import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import backgroundImage from '../../assets/img/brand/banner5.jpg';
import logo from "../../assets/img/brand/Logo.png"
import SimpleFooter from "components/Footers/SimpleFooter.js";
import './collaps.css'
// import Collapsible from 'react-collapsible';
import axios from 'axios';

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,

    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companySec: "",
            programType: "",
            empCount: "",
            elecBud: "",
            gasBud: "",
            minEnergy: "",
            searchResult: [],
            displaySearchResult: false,
            progTy: [{ id: 1, name: 'gas' },
            { id: 2, name: 'electricity' }],
            companySector: [
                { id: 1, name: 'Advanced Manufacturing' },
                { id: 2, name: 'Agriculture' },
                { id: 3, name: 'Biotech/Laboratories' },
                { id: 4, name: 'College/Universities' },
                { id: 5, name: 'Commercial Real Estate' },
                { id: 6, name: 'Dairy' },
                { id: 7, name: 'Data Centers' },
                { id: 8, name: 'Electrification' },
                { id: 9, name: 'Food Processing' },
                { id: 10, name: 'Government' },
                { id: 11, name: 'Greenhouse' },
                { id: 12, name: 'Grocery' },
                { id: 13, name: 'Healthcare' },
                { id: 14, name: 'Hospitality' },
                { id: 15, name: 'K-12 Schools' },
                { id: 16, name: 'LiveStock' },
                { id: 17, name: 'New Construction' },
                { id: 18, name: 'Parking Garages/Lots' },
                { id: 19, name: 'Public Assembly' },
                { id: 20, name: 'Restaurant' },
                { id: 21, name: 'Residental' },
                { id: 22, name: 'Retail' },
                { id: 23, name: 'Senior Living' },
                { id: 24, name: 'Warehouses & Cold Storage' },
                { id: 25, name: 'Water Distribution/Wastewater Treatment' },
            ],

            // postalCode: [
            //     { id: 1, name: 'A' },
            //     { id: 2, name: 'B' },
            //     { id: 3, name: 'C' },
            // ],

            employeeCount: [
                { id: 1, name: '< 20', from: 0, to: 20 },
                { id: 2, name: '20 - 49', from: 20, to: 43 },
                { id: 3, name: '50 - 249', from: 50, to: 249 },
                { id: 3, name: '250 +', from: 250, to: 10000000 },
            ],

            electricityBudget: [
                { id: 1, name: '<$ 50k', from: 0, to: 50000 },
                { id: 2, name: '$ 50k-$100k', from: 50000, to: 100000 },
                { id: 3, name: '$ 100k - $ 250k', from: 100000, to: 250000 },
                { id: 3, name: '$ 250k+', from: 250000, to: 10000000000 },
            ],

            gasBudget: [
                { id: 1, name: '<$ 50k', from: 0, to: 50000 },
                { id: 2, name: '$ 50k - $100k', from: 50000, to: 100000 },
                { id: 3, name: '$ 100k - $250k', from: 100000, to: 250000 },
                { id: 3, name: '$ 250k+', from: 250000, to: 10000000000 }
            ],

            energyConsumption: [
                { id: 1, name: '< 50kW •h', from: 0, to: 50000 },
                { id: 2, name: '50kW •h - 100kW •h', from: 50000, to: 100000 },
                { id: 3, name: '100 kW •h - 250 kW •h', from: 100000, to: 250000 },
                { id: 3, name: '250 kW •h +', from: 250000, to: 10000000000 }
            ],
            contactUs: {
                name: "",
                email: "",
                phone: "",
                message: "",
            },

            
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleContactUsSubmit = this.handleContactUsSubmit.bind(this);

    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.elecBud)
        console.log(this.state.companySec)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = {
            "sid": this.state.companySec ? this.state.companySec.id : "",
            "program_type": this.state.programType ? this.state.programType.name : ""
        };
        raw.employee_count = this.state.empCount ? {
            from: this.state.empCount.from,
            to: this.state.empCount.to,
        } : ""
        raw.ele_budget = this.state.elecBud ? {
            from: this.state.elecBud.from,
            to: this.state.elecBud.to,
        } : ""
        raw.minEnergy = this.state.minEnergy ? {
            from: this.state.minEnergy.from,
            to: this.state.minEnergy.to,
        } : ""

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("http://localhost:8000/programs/filter-programs", requestOptions)
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

    scrollToSearch = () => {
        // Find the search section element
        const searchSection = document.getElementById('searchSection');

        // Scroll to the search section smoothly
        if (searchSection) {
            searchSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    scrollToResult = () => {
        // Find the search section element
        const searchSection = document.getElementById('searchResult');

        // Scroll to the search section smoothly
        if (searchSection) {
            searchSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    handleContactUsSubmit = async () => {
        try {
          const { name, email, phone, message } = this.state.contactUs;
      
          // Make sure the fields are not empty
          if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return;
          }
      
          // Send data to the backend upon form submission using fetch
          const response = await fetch('http://localhost:8000/contactus/send-message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              message,
            }),
          });
      
          // Check if the response is successful (status code 200)
          if (response.ok) {
            // If successful, reset the contact us form fields or perform any other actions
            this.setState({
              contactUs: {
                name: '',
                email: '',
                phone: '',
                message: '',
              },
            });
      
            alert('Message sent successfully and data stored in the database');
          } else {
            // Handle error response
            console.error('Error submitting contact us form:', response.statusText);
            alert('Error submitting contact us form. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting contact us form:', error);
          alert('Error submitting contact us form. Please try again.');
        }
    };
      
    
    handleChange = (e) => {
        const { name, value } = e.target;
         // Check if the changed field belongs to the contact us form
        if (Object.keys(this.state.contactUs).includes(name)) {
            // Update contact us form state
            this.setState((prevState) => ({
            contactUs: {
                ...prevState.contactUs,
                [name]: value,
            },
            }));
        } else {
            // Update other state properties
            this.setState({ [name]: value });
        }
    };

    render() {
        const bgStyle = {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',  // Set the width or height as needed
            height: '800px',
        };
        return (
            <>
                {/* <DemoNavbar /> */}
                <main ref="main">
                    <div className="position-relative" style={bgStyle}>
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">


                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-1 text-white">
                                                GreenThumb{" "}
                                                <span className="display-3 text-white">Funding for Energy Projects</span>
                                            </h1>
                                            <p className="lead text-white">
                                                Empowering companies to unlock financial opportunities through targeted program discovery and funding eligibility – let's build a prosperous future together!
                                            </p>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>

                                            <Button
                                                className="mt-4"
                                                color="success"

                                                onClick={this.scrollToSearch}
                                                style={{ width: '50%', backgroundColor: '#40C365', border: '0px solid #' }}
                                            >
                                                Search your Programs
                                            </Button>

                                        </Col>
                                        <Col>

                                        </Col>
                                    </Row>
                                </div>
                            </Container>

                        </section>

                    </div>

                    <section className="section section-lg" id="searchSection">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <Row className="row-grid align-items-center">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardBody className="py-5">
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ width: "100%" }} >
                                                        <DropdownToggle caret color="secondary" style={{ width: "100%" }}>
                                                            {this.state.companySec ? this.state.companySec.name : 'Company Sector'}
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%", height: "300px", overflowY: "scroll", overflowX: "hidden" }} className="scrollable-dropdown"
                                                        >
                                                            {this.state.companySector.map(item => (
                                                                <>

                                                                    <DropdownItem href="#pablo"
                                                                        key={item.id}
                                                                        value={item.id}
                                                                        onClick={(e) => { console.log(item.id); this.setState({ companySec: item }) }}
                                                                    >
                                                                        {item.name}
                                                                    </DropdownItem>

                                                                </>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ width: "100%" }}>
                                                        <DropdownToggle caret color="secondary" style={{ width: "100%" }}>
                                                            {this.state.programType ? this.state.programType.name : 'Program Type'}
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                            {this.state.progTy.map(item => (
                                                                <>

                                                                    <DropdownItem href="#pablo"
                                                                        onClick={(e) => { this.setState({ programType: item }) }}
                                                                        key={item.id}
                                                                    >
                                                                        {item.name}
                                                                    </DropdownItem>

                                                                </>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ width: "100%" }}>
                                                        <DropdownToggle caret color="secondary" style={{ width: "100%" }}>
                                                            {this.state.empCount ? this.state.empCount.name : 'Employee Count'}
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                            {this.state.employeeCount.map(item => (
                                                                <>

                                                                    <DropdownItem href="#pablo"
                                                                        onClick={(e) => { this.setState({ empCount: item }) }}
                                                                        key={item.id}
                                                                    >
                                                                        {item.name}
                                                                    </DropdownItem>

                                                                </>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ width: "100%" }}>
                                                        <DropdownToggle caret color="secondary" style={{ width: "100%" }}>
                                                            {this.state.elecBud ? this.state.elecBud.name : 'Annual Electricity Budget'}
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                            {this.state.electricityBudget.map(item => (
                                                                <>

                                                                    <DropdownItem href="#pablo"
                                                                        onClick={(e) => { this.setState({ elecBud: item }) }}
                                                                        key={item.id}
                                                                    >
                                                                        {item.name}
                                                                    </DropdownItem>

                                                                </>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ width: "100%" }}>
                                                        <DropdownToggle caret color="secondary" style={{ width: "100%" }}>
                                                            {this.state.gasBud ? this.state.gasBud.name : 'Annual Natural Gas Budget'}
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                            {this.state.gasBudget.map(item => (
                                                                <>

                                                                    <DropdownItem href="#pablo"
                                                                        onClick={(e) => { this.setState({ gasBud: item }) }}
                                                                        key={item.id}
                                                                    >
                                                                        {item.name}
                                                                    </DropdownItem>

                                                                </>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ width: "100%" }}>
                                                        <DropdownToggle caret color="secondary" style={{ width: "100%" }}>
                                                            {this.state.minEnergy ? this.state.minEnergy.name : 'Minimum Energy Consumption'}
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                            {this.state.energyConsumption.map(item => (
                                                                <>

                                                                    <DropdownItem href="#pablo"
                                                                        onClick={(e) => { this.setState({ minEnergy: item }) }}

                                                                        key={item.id}
                                                                    >
                                                                        {item.name}
                                                                    </DropdownItem>

                                                                </>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Button
                                                    className="mt-4"
                                                    color="success"
                                                    href="#pablo"
                                                    onClick={(e) => this.handleSubmit(e)}
                                                    style={{ width: '100%' }}
                                                >
                                                    Search
                                                </Button>
                                            </CardBody>
                                        </Card>

                                    </Row>
                                </Col>

                                <Col className="order-md-1" md="6">
                                    <div className="pr-md-5">
                                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                            <i className="ni ni-like-2" />
                                        </div>
                                        <h3>Search your program</h3>

                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-satisfied" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Energy efficient tips
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-world-2" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Discover your options here
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-ui-04" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Filter out your Eligibility criteria
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <Row>

                        <Col>
                            {

                                this.state.displaySearchResult ?
                                    this.state.searchResult.length > 0 ?
                                        this.state.searchResult.map((item) => (
                                            <>

                                                <Card className="shadow shadow-lg--hover mt-5" style={{ margin: "30px" }} id="searchResult">
                                                    <CardBody>
                                                        <div className="d-flex px-3">
                                                            <div>
                                                                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                                    <i className="ni ni-satisfied" />
                                                                </div>
                                                            </div>
                                                            <div className="pl-4">
                                                                <h5 className="title text-success">
                                                                    {item.program_name}
                                                                </h5>
                                                                <p>
                                                                    <p>Program Type: {item.program_type}</p>
                                                                    <p>Program Brief: {item.program_brief}</p>

                                                                    <p>Sector: {item.sec_name}</p>
                                                                </p>
                                                                <a
                                                                    className="text-success"
                                                                    href={item.program_link}

                                                                >
                                                                    Learn more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>

                                            </>
                                        ))
                                        :
                                        <>
                                            <Card className="shadow shadow-lg--hover mt-5">
                                                <CardBody>
                                                    <div className="d-flex px-3">

                                                        <div className="pl-4">
                                                            <h5 className="title text-success">
                                                                Sorry! No Program Found.
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </>
                                    :
                                    null
                            }
                        </Col>
                    </Row>



                    <section className="section section-lg bg-gradient-green">

                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg pt-lg-0 section-contact-us" >
                        <Container>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8" style={{ paddingTop: "20%" }}>
                                    <Card className="bg-gradient-secondary shadow" >
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Want to reach out to us?</h4>
                                            <p className="mt-0">
                                                Your project is very important to us.
                                            </p>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-building" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Company Name"
                                                        type="text"
                                                        value={this.state.contactUs.name}
                                                        onChange={this.handleChange}
                                                        name="name"
                                                    />
                                                </InputGroup>
                                            </FormGroup>

                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.nameFocused,
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-single-02" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Contact Person"
                                                        type="text"
                                                        onFocus={(e) =>
                                                            this.setState({ nameFocused: true })
                                                        }
                                                        onBlur={(e) =>
                                                            this.setState({ nameFocused: false })
                                                        }
                                                    />
                                                </InputGroup>

                                            </FormGroup>
                                        

                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email address"
                                                        type="email"
                                                        value={this.state.contactUs.email}
                                                        onChange={this.handleChange}
                                                        name="email"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-mobile-button" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Phone number"
                                                        type="tel"  // Use type="tel" for phone input
                                                        value={this.state.contactUs.phone}
                                                        onChange={this.handleChange}
                                                        name="phone"
                                                    />
                                                </InputGroup>
                                            </FormGroup>

                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="message"
                                                    placeholder="Type a message..."
                                                    rows="4"
                                                    type="textarea"
                                                    value={this.state.contactUs.message}
                                                    onChange={this.handleChange}
                                                    
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="success"
                                                    size="lg"
                                                    type="button"
                                                    onClick={this.handleContactUsSubmit}
                                                >
                                                    Send Message
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default Main;
