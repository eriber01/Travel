import AuthButtons from '../AuthButtons/AuthButtons'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/slices/counter/counterSlice'
// import { loginAction, logOutAction } from '../../store/slices/auth/authSlice'
import CartButton from '../cartButton/cartButton'

export const Header = () => {
    const count = useSelector((state) => state.auth)
    console.log(count);

    return (

        <Navbar className='opacity-75' fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>

            <Container>
                <Navbar.Brand className="btn btn-dark navbar-brand border " href='/'>HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls='resOpen' />
                <Navbar.Collapse id='resOpen'>
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className=''>
                        <Nav.Link className="h6 link-secondary nav-link text-white" href='#us'>About Us</Nav.Link>
                        <Nav.Link className="h6 link-secondary nav-link text-white" href='#offers'>Travels</Nav.Link>
                        <Nav.Link className="h6 link-secondary nav-link text-white me-3" href='#contact'>Contact</Nav.Link>
                        <AuthButtons />
                        {/* <CartButton /> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}