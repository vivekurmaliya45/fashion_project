import React, { Component } from "react";
import { Button, Nav, Dropdown, Badge, Card, Container, Row, Col } from "react-bootstrap"
import OutfitDataService from "../services/outfit.service";

export default class OutfitsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      Outfits: [],
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = OutfitDataService.getAll().onSnapshot(this.onDataChange);
  }

  onDataChange(items) {
    let Items = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      Items.push({
        id: id,
        outfitId: data.outfitId,
        gender: data.gender,
        category: data.category,
        title: data.title,
        mbti: data.mbti,
        description: data.description,
        image: data.imageUrl,
        url: data.url,
      });
    });

    const groupByOutfitId = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue.outfitId] =
          result[currentValue.outfitId] || []).push(currentValue);

        return result;
      }, {});
    };
    const itemsGroupedByOutfitId = groupByOutfitId(Items, "outfitId");

    var Outfits = [];
    for (var key in itemsGroupedByOutfitId) {
      Outfits.push(itemsGroupedByOutfitId[key]);
    }

    this.setState({
      Outfits: Outfits,
    });
  }

  refreshList() {
    this.setState({
      currentOutfit: null,
    });
  }

  render() {
    const { Outfits } = this.state;
    // console.log("item",Outfits)

    return (
      <Container>
        <h4>Outfits List</h4>
        <Nav>
          <Nav.Item>
            <Nav.Link>Filter By: </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                MBTI
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">INTJ</Dropdown.Item>
                <Dropdown.Item href="#">ENTJ</Dropdown.Item>
                <Dropdown.Item href="#">INTP</Dropdown.Item>
                <Dropdown.Item href="#">ENTP</Dropdown.Item>
                <Dropdown.Item href="#">ENFJ</Dropdown.Item>
                <Dropdown.Item href="#">INFJ</Dropdown.Item>
                <Dropdown.Item href="#">INFP</Dropdown.Item>
                <Dropdown.Item href="#">ESTJ</Dropdown.Item>
                <Dropdown.Item href="#">ESTP</Dropdown.Item>
                <Dropdown.Item href="#">ENFP</Dropdown.Item>
                <Dropdown.Item href="#">ISTJ</Dropdown.Item>
                <Dropdown.Item href="#">ISTP</Dropdown.Item>
                <Dropdown.Item href="#">ESFP</Dropdown.Item>
                <Dropdown.Item href="#">ESFJ</Dropdown.Item>
                <Dropdown.Item href="#">ISFJ</Dropdown.Item>
                <Dropdown.Item href="#">ISFP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>|</Nav.Item>
          <Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Gender
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Male</Dropdown.Item>
                <Dropdown.Item href="#">Female</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>

        <hr />
        {Outfits &&
          Outfits.map((item, index) => (
            <Row>
              <Container>
                <Card style={{ padding: "10px" }}>
                  Outfit ID: {item[0].outfitId}
                  <h2>
                    <Badge bg="primary" style={{ color: "#fff" }}>{item[0].mbti}</Badge>
                  </h2>
                  <Row>
                    {item.map(function (object, i) {
                      return (
                        <Col obj={object} key={i}>
                          <Card>
                            <Card.Img variant="top" src={item[i].image} />
                            <Card.Body>
                              <Card.Title>
                                {item[i].mbti} - {item[i].title}
                              </Card.Title>
                              <Card.Text>{item[i].description}</Card.Text>
                              <a href={item[i].url} target="_blank">
                                View on Brand's website
                              </a>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                 <Row>
                   <Col>
                      <Button>Edit Outfit</Button>
                   </Col>
                  
                </Row>
                </Card>
              </Container>
            </Row>
          ))}
      </Container>
    );
  }
}

