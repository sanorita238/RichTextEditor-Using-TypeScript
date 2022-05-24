import React, { Component,MouseEvent } from 'react'
import { Row, Button, Col, Form } from 'react-bootstrap';

//usestate used in function component 
//always use func component
// rfc shortcut for func component
//class component aise define states
// <any, any> removes typecheck in typescript
class editor extends Component <any, any>{

    //props:dp array/argument
    //states defined in class component
    constructor(props:any){
        super(props); //to read
        this.state = {
            textInBox:"", 
            isBold: false,
            isItalic:false,
            isBullet:false,
            isCenter:false,
            isLeft:false,
            isRight:false,
            isBig:false,
            isUnderline:false,
            //global variable

        };
    }

    handleOnClick = ()=>{
        this.setState({isBold:!this.state.isBold})
    };
    handleItalic = ()=>{
        this.setState({isItalic:!this.state.isItalic})
    };
   handleErase = () =>{
       this.setState({textInBox:""})
   };
   handleBullet = () =>{
        this.setState({isBullet:!this.state.isBullet})
   };
   handleLeft = () =>{
       this.setState({isLeft:!this.state.isLeft})
   };
   handleCenter = () =>{
        this.setState({isCenter:!this.state.isCenter})
    };
    handleRight = () =>{
        this.setState({isRight:!this.state.isRight})
    };
    handleBig = () =>{
        this.setState({isBig:!this.state.isBig})
    };
    handleUnderline = () =>{
        this.setState({isUnderline:!this.state.isUnderline})
    };
  render() {
      const {
        textInBox
      } = this.state;
    return (
      <div>
          <div className='btn'>                 
          <Button variant="primary" onClick={this.handleOnClick}>Bold</Button>{' '}
                 <Button variant="secondary" onClick={this.handleItalic}>Italic</Button>{' '}
                 <Button variant="success" onClick={this.handleUnderline}>Hyperlink</Button>{' '}
                 <Button variant="warning" onClick={this.handleBullet}>BulletPoints</Button>{' '}
                 <Button variant="danger" onClick={this.handleLeft}>Left Align</Button>{' '}
                 <Button variant="danger"onClick={this.handleCenter}>Center Align</Button>{' '}
                 <Button variant="danger" onClick={this.handleRight}>Right Align</Button>{' '}
                 <Button variant="light" onClick={this.handleBig}>Font size</Button>{' '}
                 <Button variant="light" onClick={this.handleErase}>Erase</Button>{' '}
                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                     <Form.Label></Form.Label>
                     <Form.Control as="textarea" rows={3} value = {textInBox}
                     style = {{
                         fontWeight: this.state.isBold?'bold':'normal',
                         fontStyle:this.state.isItalic?'italic':'normal',
                         textAlign:this.state.isCenter?'center':'',
                         fontSize:this.state.isBig?'large':'small',
                         textDecoration:this.state.isUnderline?'underline':'',
                         display:this.state.isBullet?'list-item':'',    
                         listStyleType:this.state.isBullet?'disc':'',
                        //  listStylePosition:this.state.isBullet?'inside':'',
                     }}
                     onChange={(e)=>{
                         this.setState({textInBox:e.target.value});
                     }}/>
               </Form.Group>
            </div>
      </div>
    )
  }
}

export default editor;
