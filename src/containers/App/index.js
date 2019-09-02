import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import Slide from './Slide'

//custom
import {setSlide} from './actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,  modal: false
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  handleClick = (e) => {
    this.setState({
      value: e.target.value
    },() => {
      let arr = []
      let {total} =  this.props.slides
      total.push(this.state.value)
      for(let i = 1; i<= this.state.value; i++) {
        arr.push(i)
      }
      this.props.setSlide(this.state.value, total, arr)
    })
  }
 
  dropdownContent = () => {
    let arr = []
    for (let i=1; i<=20; i++) {
      arr.push(i)
    }
    return arr.map(item => <DropdownItem value={item} onClick={this.handleClick}>{item}</DropdownItem>)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {  
    const modalContent = () => {
      let str = this.props.slides.total.length ? 'The user selected': "Select from slide  "
      this.props.slides.total.map(item => {
        str = str + ' ' + item
      })
      return str
    }

    return (
      <Container>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} style={{
          marginBottom: '1em', marginTop: '1em'
        }}>
          <DropdownToggle caret>
            {this.state.value ? this.state.value : 'Select Slides'}
          </DropdownToggle>
          <DropdownMenu>
            {this.dropdownContent()}
          </DropdownMenu>
        </Dropdown>
        {
          this.props.slides.active && <Slide slides = {this.props.slides.slides}/>
        }
        {
           <Button color="primary" onClick={this.toggle} style={{
              marginBottom: '1em', marginTop: '1em'
          }}>
            Finish
          </Button>
        }
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>User Activity</ModalHeader>
          <ModalBody>
            {modalContent()}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  slides: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSlide: (num, total, arr) => dispatch(setSlide(num, total, arr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
