/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <div>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h4 className=" text-primary font-weight-light mb-2">
                  Thank you for visiting us!
                </h4>
              </Col>
            </Row>
            </div>
            <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.e2fsystems.com"
                    target="_blank"
                  >
                    E2F Systems Copyright
                  </a>
                  .
                </div>
            <hr /> 
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
