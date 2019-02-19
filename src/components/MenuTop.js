import React from 'react';
import FlexView from 'react-flexview';
import './css/MenuTop.css';
import { Col, Row } from 'react-flexbox-grid';

export default class MenuTop extends React.Component {

    constructor(props){
        super(props);
        this.state = { optSel: 'PLACES' };
        this.setOptSel = this.setOptSel.bind(this);
    }

    setOptSel(optSel){
        if(this.props.loadingItens == false){
            switch(optSel){
                case 'FOODS':    
                    //sel: #4A4A4A
                    //nsel: #9B9B9B
                    document.getElementById('opt1').style.fontFamily = 'open sans bold';
                    document.getElementById('opt1').style.color = '#4A4A4A';

                    document.getElementById('opt2').style.fontFamily = 'open sans light';
                    document.getElementById('opt2').style.color = '#9B9B9B';

                    document.getElementById('opt3').style.fontFamily = 'open sans light';
                    document.getElementById('opt3').style.color = '#9B9B9B';
                    break;
                case 'PEOPLE':
                    document.getElementById('opt1').style.fontFamily = 'open sans light';
                    document.getElementById('opt1').style.color = '#9B9B9B';

                    document.getElementById('opt2').style.fontFamily = 'open sans bold';
                    document.getElementById('opt2').style.color = '#4A4A4A';

                    document.getElementById('opt3').style.fontFamily = 'open sans light';
                    document.getElementById('opt3').style.color = '#9B9B9B';
                    break;
                case 'PLACES':
                    document.getElementById('opt1').style.fontFamily = 'open sans light';
                    document.getElementById('opt1').style.color = '#9B9B9B';

                    document.getElementById('opt2').style.fontFamily = 'open sans light';
                    document.getElementById('opt2').style.color = '#9B9B9B';

                    document.getElementById('opt3').style.fontFamily = 'open sans bold';
                    document.getElementById('opt3').style.color = '#4A4A4A';
                    break;
            }
            this.props.setItens(optSel);
        }
    }

    render(){
        return(
            <div>
                <FlexView hAlignContent='center' vAlignContent='center' className='container-menu'>
                    <Row>
                        <Col>
                            <img src={require('../assets/logo.png')} className='logo'/>
                        </Col>
                        <Col>
                            <a id='opt1'  className="opcMenu" style={{color: '#4A4A4A', fontFamily: 'open sans bold'}} onClick={() => {this.setOptSel('FOODS')}}>FOODS</a>
                            <a id='opt2'  className="opcMenu" onClick={() => {this.setOptSel('PEOPLE')}}>PEOPLE</a>
                            <a id='opt3'  className="opcMenu" onClick={() => {this.setOptSel('PLACES')}}>PLACES</a>
                        </Col>
                    </Row>
                </FlexView>
            </div>
        );
    }
}
