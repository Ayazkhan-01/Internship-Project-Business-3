import React from "react";
import classnames from "classnames";
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane } from "reactstrap";

class ManualEntry extends React.Component {
    state = {
        navPills: 1
    };

    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    render() {
        return (
            <>

                <Nav
                    style={{ marginTop: "20px", padding: "30px" }}
                    className="nav-fill flex-column flex-sm-row"
                    id="tabs-text"
                    pills
                    role="tablist"
                >
                    <NavItem>
                        <NavLink
                            aria-selected={this.state.navPills === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.navPills === 1
                            })}
                            onClick={e => this.toggleNavs(e, "navPills", 1)}
                            href="#pablo"
                            role="tab"
                        >
                            Electricity
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            aria-selected={this.state.navPills === 3}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.navPills === 3
                            })}
                            onClick={e => this.toggleNavs(e, "navPills", 3)}
                            href="#pablo"
                            role="tab"
                        >
                            Gas
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.navPills}>
                    <TabPane tabId={1}>
                        {/* Content for UI/UX Design */}
                        <div>UI/UX Design Content Goes Here</div>
                    </TabPane>
                    <TabPane tabId={2}>
                        {/* Content for Programming */}
                        <div>Programming Content Goes Here</div>
                    </TabPane>
                    <TabPane tabId={3}>
                        {/* Content for Graphic */}
                        <div>Graphic Content Goes Here</div>
                    </TabPane>
                </TabContent>
            </>
        );
    }
}

export default ManualEntry;
