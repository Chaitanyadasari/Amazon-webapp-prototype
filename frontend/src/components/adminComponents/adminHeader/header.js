import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <div>
            <Navbar bg="dark" variant="dark">
                
            <Nav className="mr-auto" style={{marginLeft:'5%'}}>
              <Nav.Link href="/admin/inventory/">Inventory</Nav.Link>
              <Nav.Link href="/admin/orders/">Orders</Nav.Link>
              <Nav.Link href="/admin/sellers/">Seller</Nav.Link>
              <Nav.Link href="/admin/analytics/">Dashboard</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>

            </Nav>
    
  </Navbar>
          </div>
          </div>
        );
    }

}

export default Header;