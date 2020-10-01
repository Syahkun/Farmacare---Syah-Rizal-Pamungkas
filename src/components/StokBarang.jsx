import React, { useState } from "react";

const StokBarang = () => {
  return (
    <div className="container stokbarang ">
      <div className="row">
        <img
          className="arrow only-pointer"
          src={require("../images/arrow.png")}
          alt=""
        />
        <p className="faktur-text only-pointer">Faktur pembelian</p>
      </div>
      <div className="row margin-b ">
        <p className="catat-text">Catat faktur pembelian</p>
      </div>
      <div className="row margin-l">
        <div className="col-lg-11">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div class="card card-first">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div class="card card-first">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="card card-second">
                <div className="col-lg-6 font-tabel">
                  <div className="row">
                    <div className="col-lg-4">Barang</div>
                    <div className="col-lg-3">Batch</div>
                    <div className="col-lg-2">ED</div>
                    <div className="col-lg-3">Harga @</div>
                  </div>
                </div>
                <div className="col-lg-6 font-tabel">
                  <div className="row">
                    <div className="col-lg-1 inline-text">Qty</div>
                    <div className="col-lg-4">Satuan</div>
                    <div className="col-lg-4">Diskon</div>
                    <div className="col-lg-3">Subtotal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StokBarang;
