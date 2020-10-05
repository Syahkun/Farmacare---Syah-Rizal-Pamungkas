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
                  <Form.Group controlId="validationCustom01">
                    <Form.Label className="text-input-nunito">
                      Supplier*
                    </Form.Label>
                    <Form.Control
                      requied
                      placeholder="Suplier"
                      className="input-card"
                      defaultValue="Penjual Obat Makmur Sejahtera"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pos-input-top">
                  <Form.Group controlId="validationCustom01">
                    <Form.Label className="text-input-nunito inline-text">
                      Nomor Faktur*
                    </Form.Label>
                    <Form.Control
                      requied
                      placeholder="No. Faktur"
                      className="input-card"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
            <Card className="padding-card shadow-box margin-tc ">
              <Card.Body>
                <Row className="border-b">
                  <Col sm={12} lg={6}>
                    <Row>
                      <Col md={4} className="col-card">
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
                        <Col lg={2} className="col-card limit-right">
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
                      <Col md={3} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Harga @
                        </Form.Label>
                        <Form.Control
                          placeholder="IDR"
                          className="input-card margin-i"
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
                          className="input-card text-right margin-i"
                        />
                      </Col>
                      <Col md={5} className="col-card">
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
                      <Col md={3} className="col-card">
                        <Form.Label className="text-input-spartan">
                          Diskon
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <Form.Control
                              as="select"
                              className="input-join-left margin-i"
                            >
                              <option>%&nbsp;&nbsp;&nbsp;&nbsp;</option>
                            </Form.Control>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-join-right text-right margin-i"
                          />
                        </InputGroup>
                      </Col>
                      <Col className="col-card">
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
                {/* limit */}
                <Row className="padd-t">
                  <Col md={0} sm={0} lg={6}></Col>
                  <Col md={12} sm={0} lg={6}>
                    <Row>
                      <Col md={1} lg={1} className="col-card"></Col>
                      <Col md={6} lg={5} className="col-card position-text-v">
                        <p className="text-v">Subtotal</p>
                      </Col>
                      <Col md={2} lg={2} className="col-card"></Col>
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
                    <Row className="padd-t">
                      <Col md={1} lg={1} className="col-card"></Col>
                      <Col md={6} lg={5} className="col-card position-text-v">
                        <p className="text-v">Diskon Pembelian</p>
                      </Col>
                      <Col md={2} lg={2} className="col-card"></Col>
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
                    {props.openDiskon === "true" ? (
                      <Row className="padd-t">
                        <Col md={1} lg={1} className="col-card"></Col>
                        <Col md={6} lg={5} className="col-card position-text-v">
                          <p className="text-v">Diskon Pembayaran</p>
                        </Col>
                        <Col md={2} lg={2} className="col-card"></Col>
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
                    ) : (
                      false
                    )}
                    {props.openPpn === "true" ? (
                      <Row className="border-c padd-t">
                        <Col md={1} lg={1} className="col-card"></Col>
                        <Col md={6} lg={5} className="col-card position-text-v">
                          <p className="text-v">DPP</p>
                        </Col>
                        <Col md={2} lg={2} className="col-card"></Col>
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
                    ) : (
                      false
                    )}
                    {props.openPpn === "true" ? (
                      <Row className="padd-t">
                        <Col md={1} lg={1} className="col-card"></Col>
                        <Col md={6} lg={5} className="col-card position-text-v">
                          <p className="text-v">PPN</p>
                        </Col>
                        <Col md={2} lg={2} className="col-card"></Col>
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
                    ) : (
                      false
                    )}
                    <Row className="border-c padd-t">
                      <Col md={1} lg={1} className="col-card"></Col>
                      <Col md={6} lg={5} className="col-card position-text-v">
                        <p className="text-v">Biaya Materai</p>
                      </Col>
                      <Col md={2} lg={2} className="col-card"></Col>
                      <Col className="col-card">
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text className="input-card no-color">
                              IDR
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            placeholder="0"
                            className="input-card no-color text-right"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row className="border-c padd-t">
                      <Col md={1} lg={1} className="col-card"></Col>
                      <Col md={6} lg={5} className="col-card position-text-v">
                        <p className="text-v">Total tagihan</p>
                      </Col>
                      <Col md={2} lg={2} className="col-card"></Col>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default StokBarang;
