import React from 'react';
import FlexView from 'react-flexview';
import { Col, Row } from 'react-flexbox-grid';
import './css/Content.css'

export default class LoadScreen extends React.Component {
    render(){
        return(
            <FlexView hAlignContent='center' vAlignContent='center' style={{width: '137.5vmin', height: '90vmin'}}>
                <Col>
                    <h1 style={{fontFamily: 'open sans light', fontSize: '5vmin', userSelect: 'none'}}>LOADING...</h1>
                </Col>
            </FlexView>
        );
    }
}