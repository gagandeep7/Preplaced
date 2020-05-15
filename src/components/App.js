import React from 'react';
import ShowList from './ShowList';
import { Jumbotron, Container, Navbar, Spinner } from 'react-bootstrap';
import ReviewList from './ReviewList';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = { isload: true };
    }

    componentDidMount() {
        this.setState({ isload: false });
    }


    render() {

        if (this.state.isload) {
            return (<Spinner animation="border" role="status" style={{
                display: 'block'
                , margin: '14rem auto'
            }}>
            </Spinner>);
        }

        else {
            return (
                <div>
                    <Navbar expand="lg" variant="dark" style={{
                        backgroundColor: '#008AFC', fontFamily: "'Montserrat' ,'sans-serif'",
                        fontSize: '30px',
                        fontWeight: '800',
                    }}>
                        <Container>
                            <Navbar.Brand href="#">PrePlaced</Navbar.Brand>
                        </Container>
                    </Navbar>

                    <Container className=' mt-4 mx-auto' style={{}}>
                        <Jumbotron style={{ backgroundColor: 'transparent', padding: '0px' }} >
                            <div className='ml-sm-10'>
                                <span style={{
                                    fontFamily: "'Montserrat' ,'sans-serif'",
                                    fontSize: '30px',
                                    fontWeight: '800'
                                }}>How do I
                             <span style={{ color: '#008AFC' }}> Proceed ?</span>
                                </span>
                            </div>

                            <ShowList />
                        </Jumbotron>

                        <Jumbotron style={{ backgroundColor: 'transparent', padding: '0px' }}>
                            <span style={{
                                fontFamily: "'Montserrat' ,'sans-serif'",
                                fontSize: '30px',
                                fontWeight: '800'
                            }}>What do the
                             <span style={{ color: '#008AFC' }}> Customer Say ?</span>
                            </span>
                            <Container style={{ color: 'black' }}>
                                <ReviewList />
                            </Container>

                        </Jumbotron>


                    </Container>



                </div>


            );
        }
    }
}
export default App;