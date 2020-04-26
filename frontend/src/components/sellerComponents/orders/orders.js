import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderHeader from './orderHeader';
import { Link } from 'react-router-dom';
import exportData from '../../../config/config';
import moment from 'moment';
import Form from 'react-bootstrap/Form';

class SellerOrders extends Component {

    state = {
        loading: false,


    }

    trackPackage = () => {

    }

    orderStatusUpdate = (e) => {
        console.log((e.target.value))

        //action call
    }

    changeStatus = (update) => {
        console.log(update)
        let i =0;
        for( i=0; i<update.length;i++);
        console.log(i)
        let latestStatus = update[i-1].deliveryStatus;
        let title = exportData.deliveryStatus[latestStatus]

        return (

            <Form onChange={this.orderStatusUpdate}>
                {/* <Form.Label>Change Status</Form.Label> */}
                <Form.Control as="select" custom>
                    <option value="3">{title}</option>
                    {latestStatus === 0 && <option value="1">Packing</option>}
                    {(latestStatus === 1 || latestStatus === 0) && <option value="2">Out for Shipping</option>}


                </Form.Control>
            </Form>
        )

    }


    render() {

        let values = [{
            _id: '1',
            customerId: '1234',
            customerName: "Emily",
            orderDate: '2019-07-03',
            billing: {
                name: 'EMILY',
                cardNumber: '7465647564746374',
                totalPrice: '1.09',

            },
            shippingAddress: {
                AddressId: 'ADD1',
                name: 'Emily',
                address1: '430, north1st street',
                adress2: 'street',
                city: 'San Jose',
                state: 'California',
                country: 'US',
                zipcode: '976564',
                phoneNumber: '9874656574'
            },
            products: [{
                productId: 'p_1',
                productName: 'product 1',
                sellerName: 'seller 1',
                quantity: 2,
                perQuantityPrice: 1,
                totalPrice: 2,
                orderStatus: 0,
                gift: {
                    gift: 1,
                    giftMessage: 'Gift message'
                },
                
                orderUpdates: [{
                    date: '2020-09-10',
                    deliveryStatus: 0
                },
            
                {date: '2020-09-10',
                deliveryStatus: 1
            
            }]

            },
            {
                productId: 'p_2',
                productName: 'product 2',
                sellerName: 'seller 2',
                quantity: 4,
                perQuantityPrice: 1,
                totalPrice: 2,
                orderStatus: 0,
                gift: {
                    gift: 1,
                    giftMessage: 'Gift message'
                },
                // orderUpdatesValue: [{
                //     date: '2018-09-17',
                //     deliveryStatus: 2
                // }],


                orderUpdates: [{
                    date: '2018-09-17',
                    deliveryStatus: 2
                }]

            }],
        },
        {
            _id: '2',
            customerId: '12344',
            customerName: "Sam",
            orderDate: '2019-03-09',
            billing: {
                name: 'SAM',
                cardNumber: '7465647564746986',
                totalPrice: '1.09',

            },
            shippingAddress: {
                AddressId: 'ADD1',
                name: 'SAM',
                address1: '430, north1st street',
                adress2: 'street',
                city: 'San Jose',
                state: 'CHICAGO',
                country: 'US',
                zipcode: '85647',
                phoneNumber: '2874646464'
            },
            products: [{
                productId: 'p_1',
                productName: 'product 3',
                sellerName: 'seller 1',
                quantity: 4,
                gift: {
                    gift: 0,
                    giftMessage: ''
                },
                perQuantityPrice: 1,
                totalPrice: 7,
                orderStatus: 2,
              
                // orderUpdatesValue: [{
                //     date: '2020-09-10',
                //     deliveryStatus: 6
                // }],
                orderUpdates: [{
                    date: '2020-09-10',
                    deliveryStatus: 3
                },{
                    date: '2020-09-10',
                    deliveryStatus: 6
                }]

            },]


        }]

        console.log(values[0].products)
        return (
            <div>
                <div>
                    <OrderHeader />
                    <br></br>
                    <Container>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                {values.length && values.map((orders, i) => {
                                    console.log(orders)
                                    return (
                                        <div key={i}>
                                            {orders.products.map((product, i) => {
                                                if (product.sellerName === 'seller 1') {
                                                    return (
                                                        <div key={i}>
                                                            <Card>
                                                                <Card.Header >
                                                                    <Row>
                                                                        <Col md={3}>
                                                                            <Row>
                                                                                <small className="text-muted">
                                                                                    ORDER PLACED</small>
                                                                            </Row>
                                                                            <Row>
                                                                                <small className="text-muted">{moment(orders.orderDate).format('MMM') + " " + moment(orders.orderDate).format('DD') + ", " +
                                                                                    moment(orders.orderDate).format('YYYY')}</small>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <Row>
                                                                                <small className="text-muted">
                                                                                    SHIP TO</small>
                                                                            </Row>
                                                                            <Row>
                                                                                <small className="text-muted">{orders.shippingAddress.name}</small>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md={3}>
                                                                            <Row>
                                                                                <small className="text-muted">
                                                                                    Order #</small>
                                                                                <small className="text-muted">
                                                                                    {orders._id}</small>
                                                                            </Row>
                                                                            <Row>
                                                                                <Link to={{ pathname: "/user/orders/details/", state: { orderInfo: orders, productInfo: product } }} >Order details</Link>
                                                                            </Row>
                                                                        </Col>
                                                                    </Row>
                                                                </Card.Header >

                                                                <Card.Body>

                                                                    <Card.Title>{exportData.orderStatus[product.orderStatus]}</Card.Title>
                                                                    <Row>
                                                                        <Col xs={2}>
                                                                            <Link to={{ pathname: '//', state: {} }}>
                                                                                <img
                                                                                    alt=''
                                                                                    style={{ width: '100%' }}
                                                                                    src={'https://imagesbuckethandshake.s3-us-west-1.amazonaws.com/product.jpg'}
                                                                                ></img>
                                                                            </Link>
                                                                        </Col>
                                                                        <Col md={7}>
                                                                            <Row>
                                                                                {product.productName}
                                                                            </Row>
                                                                            <Row>

                                                                                {/* <Link> {product.sellerName}</Link> */}
                                                                            </Row>
                                                                        </Col>

                                                                        <Col md={3}>
                                                                            <Button variant="primary" style={{ float: 'right', width: '100%', background: '#f3cf75', border: '#f3cf75', color: 'black' }}  ><Link to={{pathname:"/user/orders/orderStatus/", state:{ productInfo:product}}} style={{color:'black'}}>Track Package</Link></Button>
                                                                            <br></br>
                                                                            <br></br>
                                                                            {product.orderStatus === 0 && <div>
                                                                                <Button variant="primary" style={{ float: 'right', width: '100%', background: '#f0f1f4', border: '#f0f1f4', color: 'black' }}> <Link to={{ pathname: "/user/orders/cancelOrder/", state: { orderInfo: orders, productInfo: product } }} style={{ color: 'black' }}>Cancel Order</Link></Button>

                                                                                <br></br>
                                                                                <br></br>
                                                                            </div>
                                                                            }
                                                                            {this.changeStatus(product.orderUpdates)}

                                                                        </Col>
                                                                    </Row>
                                                                </Card.Body>
                                                            </Card>
                                                            <br></br>
                                                        </div>

                                                    )
                                                }
                                                else {
                                                    return (<div key={i}>
                                                    </div>)
                                                }
                                            })}
                                        </div>
                                    )
                                })}

                            </Col>

                            <Col md={2}></Col>

                        </Row>

                    </Container>
                </div>
            </div>
        )
    }
}
export default SellerOrders;