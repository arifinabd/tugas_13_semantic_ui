import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Menu,
  Placeholder,
  Search,
  Segment,
  Table,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Segment>
        <br />
        <Grid columns="2" stackable textAlign="center">
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" link />
                Cari Document
              </Header>
              <Search placeholder="Search document..." />
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="file pdf outline" />
                Tambah document baru
              </Header>
              <br />
              <Button primary>Create document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
      </Segment>
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header>Website Terkait</Header>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a
                  href="http://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  facebook
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a
                  href="https://react.semantic-ui.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Semantic-ui
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a
                  href="https://niomic.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  niomic
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a
                  href="https://reactjs.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  React
                </a>
              }
            />
          </List>
        </Grid.Column>
      </Grid>
      <Grid columns="equal">
        <Grid.Column width="2"></Grid.Column>
        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3" textAlign="right">
                  <Search placeholder="Search" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  Nama Document
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Jenis file
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Paduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Paduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Paduan Belajar ReactJS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
