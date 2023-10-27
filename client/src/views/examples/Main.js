import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import backgroundImage from '../../assets/img/brand/banner2.jpg';


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
    state = {};

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

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
                                <span />
                                <span />
                                <span />
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
                                                GreenThumb{" "}
                                                <span>Funding for Energy Projects (Business)</span>
                                            </h1>
                                            <p className="lead text-white">
                                                Empowering companies to unlock financial opportunities through targeted program discovery and funding eligibility – let's build a prosperous future together!
                                            </p>

                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}

                        </section>
                        {/* 1st Hero Variation */}
                    </div>

                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <Row className="row-grid align-items-center">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardBody className="py-5">
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ "width": "80%" }}>
                                                        <DropdownToggle caret color="secondary" style={{ "width": "100%" }}>
                                                            Company Sector
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ "width": "100%" }}>
                                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()} >
                                                                Action
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ "width": "80%" }}>
                                                        <DropdownToggle caret color="secondary">
                                                            Postal Code
                                                        </DropdownToggle>
                                                        <DropdownMenu style={{ "width": "100%" }}>
                                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                Action
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ "width": "80%" }}>
                                                        <DropdownToggle caret color="secondary">
                                                            Employee Count
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                Action
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ "width": "80%" }}>
                                                        <DropdownToggle caret color="secondary">
                                                            Anual Electricity Budget
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                Action
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Col className="order-md-2" md="12" style={{ padding: "10px" }}>
                                                    <UncontrolledDropdown style={{ "width": "80%" }}>
                                                        <DropdownToggle caret color="secondary">
                                                            Anual Natural Gas Budget
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                Action
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Col>
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
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
                                            <i className="ni ni-settings-gear-65" />
                                        </div>
                                        <h3>Search your program</h3>
                                        <p>
                                            The kit comes with three pre-built pages to help you get
                                            started faster. You can change the text and images and
                                            you're good to go.
                                        </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <Badge
                                                            className="badge-circle mr-3"
                                                            color="success"
                                                        >
                                                            <i className="ni ni-settings-gear-65" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Carefully crafted components
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
                                                            <i className="ni ni-html5" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">Amazing page examples</h6>
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
                                                            <i className="ni ni-satisfied" />
                                                        </Badge>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">
                                                            Super friendly support team
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



                    <section className="section section-lg bg-gradient-default">

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
                                                            <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Your name"
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
                                                    color="default"
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

            </>
        );
    }
}

export default Main;
