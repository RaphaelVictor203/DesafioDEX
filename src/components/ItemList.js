import React from 'react';
import FlexView from 'react-flexview';
import { Col, Row } from 'react-flexbox-grid';
import './css/ItemList.css';

export default class ItemList extends React.Component {
    render(){
        return(
            <FlexView vAlignContent='bottom' className="container-item" style={{backgroundImage: 'url(' + this.props.background + ')'}}>
                <Col>
                    <FlexView vAlignContent='center' className='legend'>
                        <Col>
                            <p className="name-item">{this.props.title}</p>
                        </Col>
                    </FlexView>
                </Col>
            </FlexView>
        );
    }
}