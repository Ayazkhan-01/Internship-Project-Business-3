import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import backgroundImage from '../../assets/img/brand/banner5.jpg';
import logo from "../../assets/img/brand/Logo.png"
import SimpleFooter from "components/Footers/SimpleFooter.js";

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
          companySector: [
            { id: 1, name: 'Agriculture' },
            { id: 2, name: 'Residential' },
            { id: 3, name: 'Commercial Real Estate' },
            { id: 4, name: 'College/Universities' },
            { id: 5, name: 'Food Processing' },
            { id: 6, name: 'Dairy' },
            { id: 7, name: 'Electrification' },
            { id: 8, name: 'Grocery' },
            { id: 9, name: 'Greenhouses' },
            { id: 10, name: 'Health Care' },
            { id: 11, name: 'Hospitality' },
            { id: 12, name: 'Parking Garage/Lots' },
            { id: 13, name: 'Retail' },
            { id: 14, name: 'Senior Housing' },
            { id: 15, name: 'C' },
          ],

          postalCode: [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'C' },
          ],

          employeeCount: [
            { id: 1, name: '< 20' },
            { id: 2, name: '20 - 49' },
            { id: 3, name: '50 - 249' },
            { id: 3, name: '250 +' },
          ],

          electricityBudget: [
            { id: 1, name: '<$ 50k' },
            { id: 2, name: '$ 50k-$100k' },
            { id: 3, name: '$ 100k - $ 250k' },
            { id: 3, name: '$ 250k+' },
          ],

          gasBudget: [
            { id: 1, name: '<$ 50k' },
            { id: 2, name: '$ 50k - $100k' },
            { id: 3, name: '$ 100k - $250k' },
            { id: 3, name: '$ 250k+' }
          ],

          energyConsumption: [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'C' },
          ],



        };
      }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    scrollToSearch = () => {
        // Find the search section element
        const searchSection = document.getElementById('searchSection');
    
        // Scroll to the search section smoothly
        if (searchSection) {
          searchSection.scrollIntoView({ behavior: 'smooth' });
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
                                                    href="#pablo"
                                                    onClick={this.scrollToSearch}
                                                    style={{ width: '50%', backgroundColor: '#40C365', border: '0px solid #'}}
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
                                                            Company Sector
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }} className="scrollable-dropdown">
                                                        {this.state.companySector.map(item => (
                                                            <>
                                                               
                                                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()} 
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
                                                            Postal Code
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                        {this.state.postalCode.map(item => (
                                                            <>
                                                               
                                                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()} 
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
                                                            Employee Count
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                        {this.state.employeeCount.map(item => (
                                                            <>
                                                               
                                                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()} 
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
                                                            Annual Electricity Budget
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                        {this.state.electricityBudget.map(item => (
                                                            <>
                                                               
                                                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()} 
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
                                                            Annual Natural Gas Budget
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                        {this.state.gasBudget.map(item => (
                                                            <>
                                                               
                                                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()} 
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
                                                            Minimum Energy Consumption
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ width: "100%" }}>
                                                        {this.state.energyConsumption.map(item => (
                                                            <>
                                                               
                                                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()} 
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
                                                    onClick={(e) => e.preventDefault()}
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
                    
                    {/* Section for Listing Searched Programs */}
                    <section>


                    </section>


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
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused,
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-building" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Company name"
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
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.emailFocused,
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email address"
                                                        type="email"
                                                        onFocus={(e) =>
                                                            this.setState({ emailFocused: true })
                                                        }
                                                        onBlur={(e) =>
                                                            this.setState({ emailFocused: false })
                                                        }
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="Type a message..."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="success"
                                                    size="lg"
                                                    type="button"
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
                <SimpleFooter/>
            </>
        );
    }
}

export default Main;
