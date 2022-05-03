import React, { useState, Component } from "react";
import { Button, Nav, Dropdown, Badge, Card, Container, Row, Col, } from "react-bootstrap";

export default function AddOutfitForm() {
  return (
    <>
      <div className="submit-form">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <div className="row">
                <div className="col">
                   <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="outfitId"
                      required
                      name="outfitId"
                      disabled
                      hidden
                    />
                  </div> 
                </div>
              </div> */}
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      required
                      name="title"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="description">Short Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      required
                      name="description"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select className="form-control" id="category">
                      <option value="top">Top</option>
                      <option value="bottom">Bottom</option>
                      <option value="shoes">Shoes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="url">Item URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="url"
                      required
                      name="url"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="imageUrl">Item Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imageUrl"
                      required
                      name="imageUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
