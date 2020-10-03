import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const StokBarang = () => {
  return (
    <Container className="m-l">
      <Row>
        <img
          className="arrow only-pointer"
          src={require("../images/arrow.png")}
          alt=""
        />
        <p className="faktur-text only-pointer">Faktur pembelian</p>
      </Row>
      <Row className="margin-b ">
        <p className="catat-text">Catat faktur pembelian</p>
      </Row>
      <Row>
        <Col>
          <Card className="card-top">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-top">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="padding-card">
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Row>
                      <Col md={4} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Barang
                        </Form.Label>
                        <Form.Control
                          placeholder="Nama Barang"
                          className="input-card"
                        />
                      </Col>
                      <Col md={3} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Batch
                        </Form.Label>
                        <Form.Control
                          placeholder="Batch"
                          className="input-card"
                        />
                      </Col>
                      <div className="input-join">
                        <Col md={1} className="col-card limit-right">
                          <Form.Label className="text-input-spartan">
                            ED
                          </Form.Label>
                          <Form.Control
                            placeholder="MM"
                            className="input-join-left text-center"
                          />
                        </Col>
                        <Col md={1} className="col-card limit-left">
                          <Form.Label className="text-input-spartan">
                            A
                          </Form.Label>
                          <Form.Control
                            placeholder="YY"
                            className="input-join-right text-center"
                          />
                        </Col>
                      </div>
                      <Col md={3} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Harga @
                        </Form.Label>
                        <Form.Control
                          placeholder="IDR"
                          className="input-card"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md={1} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Qty
                        </Form.Label>
                        <Form.Control
                          placeholder="0"
                          className="input-card text-right"
                        />
                      </Col>
                      <Col md={5} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Satuan
                        </Form.Label>
                        <Form.Control as="select" className="input-card">
                          <option></option>
                        </Form.Control>
                      </Col>
                      <Col md={3} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Diskon
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <Form.Control
                              as="select"
                              className="input-join-left"
                            >
                              <option>%&nbsp;&nbsp;&nbsp;&nbsp;</option>
                            </Form.Control>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-join-right text-right"
                          />
                        </InputGroup>
                      </Col>
                      <Col className="col-card">
                        <Form.Label className="text-input-spartan">
                          Subtotal
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-border no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-border no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* batas */}
                <Row>
                  <Col></Col>
                  <Col>
                    <Row>
                      <Col md={1} className="col-card"></Col>
                      <Col md={5} className="col-card position-text-v">
                        <p className="text-v">Subtotal</p>
                      </Col>
                      <Col md={3} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-border no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-border no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={1} className="col-card"></Col>
                      <Col md={5} className="col-card position-text-v">
                        <p className="text-v">Diskon Pembelian</p>
                      </Col>
                      <Col md={3} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <Form.Control
                              as="select"
                              className="input-join-left"
                            >
                              <option>%&nbsp;&nbsp;&nbsp;&nbsp;</option>
                            </Form.Control>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-join-right text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={1} className="col-card"></Col>
                      <Col md={5} className="col-card position-text-v">
                        <p className="text-v">DPP</p>
                      </Col>
                      <Col md={3} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-border no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-border no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={1} className="col-card"></Col>
                      <Col md={5} className="col-card position-text-v">
                        <p className="text-v">PPN</p>
                      </Col>
                      <Col md={3} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-border no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-border no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={1} className="col-card"></Col>
                      <Col md={5} className="col-card position-text-v">
                        <p className="text-v">Biaya Materai</p>
                      </Col>
                      <Col md={3} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-border no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-border no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={1} className="col-card"></Col>
                      <Col md={5} className="col-card position-text-v">
                        <p className="text-v">Total tagihan</p>
                      </Col>
                      <Col md={3} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-border no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-border no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* <Row> */}
                {/* <Col sm={6}></Col>
                  <Col sm={6} className="col-card">
                    <Row>
                      <Col sm={6}>asa</Col>
                      <Col>asa</Col>
                      <Col>asa</Col>
                    </Row> */}
                {/* <Row>
                      <Col sm={6} className="position-text-v">
                        <p className="text-v">Subtotal</p>
                      </Col>
                      <Col sm={6}>
                        <Row>
                          <Col sm={6}></Col>
                          <Col sm={6}>
                            <InputGroup>
                              <InputGroup.Prepend>
                                <InputGroup.Text className="input-card no-border no-color">
                                  IDR
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <Form.Control
                                placeholder="0"
                                className="input-card no-border no-color text-right"
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row> */}
                {/* </Col>
                </Row> */}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StokBarang;
