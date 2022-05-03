import React, { Component } from "react";
import { Card, Container, Row, Col, Image, Accordion } from "react-bootstrap"
import OutfitDataService from "../services/outfit.service";
import AddOutfitForm from "./AddOutfitForm";


export default class AddOutfit extends Component {
  constructor(props) {
    super(props);
    // this.onChangeoutfitID = this.onChangeoutfitID.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMBTI = this.onChangeMBTI.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);
    this.onChangeimageURL = this.onChangeimageURL.bind(this);
    this.saveOutfit = this.saveOutfit.bind(this);

    this.state = {
      outfitID: "",
      title: "",
      description: "",
      category: "",
      gender: "",
      mbti: "",
      url: "",
      imageURL: "",
      submitted: false,
    };
  }

  // onChangeoutfitID(e) {
  //   this.setState({
  //     outfitID: e.target.value,
  //   });
  // }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeMBTI(e) {
    this.setState({
      mbti: e.target.value,
    });
  }
  onChangeURL(e) {
    this.setState({
      url: e.target.value,
    });
  }
  onChangeimageURL(e) {
    this.setState({
      imageURL: e.target.value,
    });
  }

  saveOutfit() {
    let data = {
      // outfitID: this.state.outfitID,
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      gender: this.state.gender,
      mbti: this.state.mbti,
      url: this.state.url,
      imageURL: this.state.imageURL,
    };
    console.log("first", data)
    OutfitDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    return (

      <Container>
        <Row>
          <Col>

            {/* <Card.Header>Outfit Bundle ID:</Card.Header> */}
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
              </div>
            ) : (

              <>
                <Card style={{ padding: '20px' }}>
                  <h3>New Outfit</h3>
                  <h5>Outfit ID: must be auto generated (UUID)</h5>
                  <Row>
                    <Col>


                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select className="form-control" id="gender" onChange={this.onChangeGender}>
                          <option value="m">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-group">
                        <label htmlFor="mbti">MBTI Type</label>
                        <select className="form-control" id="mbti" onChange={this.onChangeMBTI}>
                          <option value="INTJ">INTJ</option>
                          <option value="ENTJ">ENTJ</option>
                          <option value="INTP">INTP</option>
                          <option value="ENTP">ENTP</option>
                          <option value="ENFJ">ENFJ</option>
                          <option value="INFJ">INFJ</option>
                          <option value="INFP">INFP</option>
                          <option value="ESTJ">ESTJ</option>
                          <option value="ESTP">ESTP</option>
                          <option value="ENFP">ENFP</option>
                          <option value="ISTJ">ISTJ</option>
                          <option value="ISTP">ISTP</option>
                          <option value="ESFP">ESFP</option>
                          <option value="ESFJ">ESFJ</option>
                          <option value="ISFJ">ISFJ</option>
                          <option value="ISFP">ISFP</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>+ Item #1 (Required)</Accordion.Header>
                      <Accordion.Body>
                        <Card>
                          <div className="submit-form">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                          type="text"
                                          onChange={this.onChangeTitle}
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
                                          onChange={this.onChangeDescription}
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
                                        <select className="form-control" id="category" onChange={this.onChangeCategory}>
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
                                          onChange={this.onChangeURL}
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
                                          onChange={this.onChangeimageURL}
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
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>+ Item #2 (Required)</Accordion.Header>
                      <Accordion.Body>
                        <Card>
                          <div className="submit-form">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                          type="text"
                                          onChange={this.onChangeTitle}
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
                                          onChange={this.onChangeDescription}
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
                                        <select className="form-control" id="category" onChange={this.onChangeCategory}>
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
                                          onChange={this.onChangeURL}
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
                                          onChange={this.onChangeimageURL}
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
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>+ Item #3 (Required)</Accordion.Header>
                      <Accordion.Body>
                        <Card>
                          <div className="submit-form">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                          type="text"
                                          onChange={this.onChangeTitle}
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
                                          onChange={this.onChangeDescription}
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
                                        <select className="form-control" id="category" onChange={this.onChangeCategory}>
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
                                          onChange={this.onChangeURL}
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
                                          onChange={this.onChangeimageURL}
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
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>+ Item #4 (Optional)</Accordion.Header>
                      <Accordion.Body>
                        <Card>
                          <div className="submit-form">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                          type="text"
                                          onChange={this.onChangeTitle}
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
                                          onChange={this.onChangeDescription}
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
                                        <select className="form-control" id="category" onChange={this.onChangeCategory}>
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
                                          onChange={this.onChangeURL}
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
                                          onChange={this.onChangeimageURL}
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
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <button className="btn btn-success" onClick={this.saveOutfit}>Add Outfit</button>
                </Card>
              </>
            )}
          </Col>
          <Col>
            <div >
              <Card style={{ maxWidth: '85%', textAlign: 'center' }}>
                <Row>
                  <Col>
                    <Image style={{ maxWidth: '65%', margin: '10px' }} id="item_img_1" src="https://bananarepublicfactory.gapfactory.com/webcontent/0028/632/711/cn28632711.jpg" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Image id="item_img_2" style={{ maxWidth: '80%' }} src="https://bananarepublicfactory.gapfactory.com/webcontent/0028/632/711/cn28632711.jpg" />
                  </Col>
                  {/* <Col>
                    <Image id="item_img_3" style={{ maxWidth: '80%' }} src="https://bananarepublicfactory.gapfactory.com/webcontent/0028/632/711/cn28632711.jpg" />
                  </Col> */}
                  <Col>
                    <Image id="item_img_4" style={{ maxWidth: '80%' }} src="https://bananarepublicfactory.gapfactory.com/webcontent/0028/632/711/cn28632711.jpg" />
                  </Col>
                </Row>
              </Card>
            </div>

          </Col>
        </Row>
      </Container>
    );

  }
}
