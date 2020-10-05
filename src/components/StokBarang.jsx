import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Button,
} from "react-bootstrap";

const StokBarang = (props) => {
  //FORM CHECK IF THERE IS AN VALUE IN INPUT
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container
      className="m-l justify-content-center"
      style={{ marginLeft: props.margin }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <img
            className="arrow only-pointer"
            src={require("../images/arrow.png")}
            alt=""
          />
          <p className="faktur-text only-pointer">Faktur pembelian</p>
        </Row>
        <Row className="margin-b ">
          <Col xs={12} sm={12} lg={6} md={6}>
            {" "}
            <p className="catat-text">Catat faktur pembelian</p>
          </Col>
          <Col>
            <Row className="btn-position d-flex justify-content-end">
              <Button className="btn-style" variant="primary">
                Batal
              </Button>
              <div class="split"></div>
              <Button className="btn-style" variant="primary" type="submit">
                Simpan faktur
              </Button>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <Card className="card-top padding-card shadow-box ">
              <Row>
                <Col className="pos-input-top">
                  <Form.Group controlId="validationCustomUsername radius">
                    <Form.Label className="text-input-nunito">
                      Supplier<span class="color-red">*</span>
                    </Form.Label>

                    <Form.Control
                      className="input-card"
                      type="text"
                      placeholder="Username"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Tolong masukan nama Apotik!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pos-input-top">
                  <Form.Group controlId="validationCustomNumFaktur radius">
                    <Form.Label className="text-input-nunito">
                      Nomor Faktur<span class="color-red">*</span>
                    </Form.Label>

                    <Form.Control
                      className="input-card"
                      type="text"
                      placeholder="No. Faktur"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Tolong masukan Nomer Faktur!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col className="pos-input-top">
                  <Row>
                    <Col sm={8}>
                      <Form.Group controlId="validationCustom01">
                        <Form.Label className="text-input-nunito inline-text">
                          Harga Termasuk PPN
                        </Form.Label>
                        <Form.Control
                          onChange={props.onChange}
                          as="select"
                          requied
                          className="input-card"
                        >
                          <option value={true}>Ya</option>
                          <option value={false}>Tidak</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col sm={4}></Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col>
            <Card className="card-top padding-card shadow-box ">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col className="pos-input-top">
                    <Row>
                      <Col sm={8}>
                        <Form.Group controlId="validationCustom01">
                          <Form.Label className="text-input-nunito inline-text">
                            Pembayaran
                          </Form.Label>
                          <Form.Control
                            onChange={props.onChangeDiskon}
                            as="select"
                            requied
                            className="input-card"
                          >
                            <option value={true}>Tunai</option>
                            <option value={false}>Kredit</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col sm={4}></Col>
                    </Row>
                  </Col>
                  <Col className="pos-input-top"></Col>
                </Row>
                <Row>
                  <Col className="pos-input-top">
                    <Form.Group controlId="validationCustom01">
                      <Form.Label className="text-input-nunito">
                        Tanggal pembelian
                      </Form.Label>
                      <Form.Control
                        type="date"
                        requied
                        placeholder="First name"
                        className="input-card"
                        value="2020-05-14"
                      />
                    </Form.Group>
                  </Col>
                  <Col className="pos-input-top">
                    <Form.Group controlId="validationCustom01">
                      <Form.Label className="text-input-nunito">
                        Jatuh tempo
                      </Form.Label>
                      <Form.Control
                        type="date"
                        requied
                        placeholder="First name"
                        className="input-card"
                        value="2020-06-14"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
        {/* limit */}
        <Row>
          <Col>
            <div class="line-card-t"></div>
            <div class="line-card-b"></div>

            <Card className="padding-card shadow-box margin-tc ">
              <Card.Body>
                <Row>
                  <Col sm={12} lg={6}>
                    <Row>
                      <Col md={3} lg={4} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Barang
                        </Form.Label>

                        <Form.Control
                          placeholder="Nama Barang"
                          className="input-card margin-i"
                        />
                      </Col>
                      <Col md={3} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Batch
                        </Form.Label>
                        <Form.Control
                          placeholder="Batch"
                          className="input-card margin-i"
                        />
                      </Col>
                      <div className="input-join">
                        <Col md={3} lg={2} className="col-card">
                          <Form.Label className="text-input-spartan">
                            ED
                          </Form.Label>
                          <div className="join">
                            <Form.Control
                              placeholder="MM"
                              className="input-join-left text-center margin-i"
                            />
                            <Form.Control
                              placeholder="YY"
                              className="input-join-right text-center margin-i"
                            />
                          </div>
                        </Col>
                      </div>
                      <Col md={3} className="col-card-qty-left">
                        <Form.Label className="text-input-spartan">
                          Harga @
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card border-s-r no-color margin-i">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card  no-color text-right margin-i"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12} lg={6}>
                    <Row>
                      <Col md={1} lg={1} className="col-card-qty">
                        <Form.Label className="text-input-spartan">
                          Qty
                        </Form.Label>
                        <Form.Control
                          placeholder="0"
                          className="input-card text-right margin-i"
                        />
                      </Col>
                      <Col md={11}>
                        <Row>
                          <Col md={4} lg={4} className="col-card-qty-right">
                            <Form.Label className="text-input-spartan">
                              Satuan
                            </Form.Label>
                            <Form.Control
                              as="select"
                              className="input-card margin-i"
                            >
                              <option></option>
                            </Form.Control>
                          </Col>
                          <Col md={4} lg={4} className="col-card margin-i-d">
                            <Form.Label className="text-input-spartan">
                              Diskon
                            </Form.Label>
                            <InputGroup>
                              <InputGroup.Prepend>
                                <Form.Control
                                  as="select"
                                  className="input-join-left margin-i  pad-r-diskon"
                                >
                                  <option>%</option>
                                </Form.Control>
                              </InputGroup.Prepend>
                              <Form.Control
                                placeholder="0"
                                className="input-join-right text-right margin-i"
                              />
                            </InputGroup>
                          </Col>
                          <Col md={4} lg={4} className="col-card">
                            <Form.Label className="text-input-spartan">
                              Subtotal
                            </Form.Label>
                            <InputGroup>
                              <InputGroup.Prepend>
                                <InputGroup.Text className="input-card no-border no-color margin-i">
                                  IDR
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <Form.Control
                                placeholder="0"
                                className="input-card no-border no-color text-right margin-i"
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* limit */}
                <Row className="padd-t">
                  <Col md={0} sm={0} lg={6}></Col>
                  <Col md={12} sm={0} lg={6}>
                    <Row className="margin-b5px">
                      <Col md={0} lg={1} className="col-card-qty"></Col>
                      <Col>
                        <Row>
                          <Form.Label
                            column
                            md="6"
                            lg="4"
                            className="position-text-v"
                          >
                            <p className="text-v">Subtotal</p>
                          </Form.Label>
                          <Col md={2} lg={4} className="col-card"></Col>
                          <Col md={4} lg={4} className="col-card">
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
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                      <Col md={2} lg={1}></Col>
                      <Form.Label column md="4" lg="5">
                        <p className="text-v text-right">Diskon Pembelian</p>
                      </Form.Label>
                      <Col md={2} lg={2}></Col>
                      <Col md="4" lg={4} className="margin-i-d">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <Form.Control
                              as="select"
                              className="input-join-left pad-r-diskon"
                            >
                              <option>%</option>
                            </Form.Control>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-join-right text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Group>
                    {props.openDiskon === "true" ? (
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Col md={2} lg={1}></Col>
                        <Form.Label column md="4" lg="5">
                          <p className="text-v text-right inline-text">
                            Diskon Pembayaran
                          </p>
                        </Form.Label>
                        <Col md={2} lg={2}></Col>
                        <Col md="4" lg={4} className="margin-i-d">
                          <InputGroup>
                            <InputGroup.Prepend>
                              <Form.Control
                                as="select"
                                className="input-join-left pad-r-diskon"
                              >
                                <option>%</option>
                              </Form.Control>
                            </InputGroup.Prepend>
                            <Form.Control
                              placeholder="0"
                              className="input-join-right text-right"
                            />
                          </InputGroup>
                        </Col>
                      </Form.Group>
                    ) : (
                      false
                    )}
                    {props.openPpn === "true" ? (
                      <Row className="margin-b5px">
                        <Col md={0} lg={1} className="col-card-qty"></Col>
                        <Col>
                          <Row>
                            <div class="line-card-sub-t"></div>
                            <Form.Label
                              column
                              md="6"
                              lg="4"
                              className="position-text-v"
                            >
                              <p className="text-v">DPP</p>
                            </Form.Label>
                            <Col md={2} lg={4} className="col-card"></Col>
                            <Col md={4} lg={4} className="col-card">
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
                    ) : (
                      false
                    )}
                    {props.openPpn === "true" ? (
                      <Row className="margin-b5px">
                        <Col md={0} lg={1} className="col-card-qty"></Col>
                        <Col>
                          <Row>
                            <Form.Label
                              column
                              md="6"
                              lg="4"
                              className="position-text-v"
                            >
                              <p className="text-v">PPN</p>
                            </Form.Label>
                            <Col md={2} lg={4} className="col-card"></Col>
                            <Col md={4} lg={4} className="col-card">
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
                    ) : (
                      false
                    )}
                    <div class="line-card-sub-m"></div>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                      <Col md={1} lg={1}></Col>

                      <Form.Label column md="5" lg="4">
                        <p className="text-v text-right">Biaya Materai</p>
                      </Form.Label>
                      <Col></Col>
                      <Col md={4} lg={4} className="margin-i-d">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card border-s-r no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card  no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Group>

                    <Row className="margin-b5px">
                      <Col md={0} lg={1} className="col-card-qty"></Col>
                      <Col>
                        <Row>
                          <div class="line-card-sub-b"></div>
                        </Row>

                        <Row>
                          <Form.Label
                            column
                            md="6"
                            lg="4"
                            className="position-text-v"
                          >
                            <p className="text-v text-right">Total tagihan</p>
                          </Form.Label>
                          <Col md={2} lg={4} className="col-card"></Col>
                          <Col md={4} lg={4} className="col-card">
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
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default StokBarang;
