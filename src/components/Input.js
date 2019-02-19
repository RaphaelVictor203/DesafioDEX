import React from 'react';
import './css/Input.css';
import FlexView from 'react-flexview';

export default class Input extends React.Component {
    render(){
        return(
            <FlexView vAlignContent='center' hAlignContent='center' className='container-input'>
                <input 
                    id={this.props.id} 
                    type={this.props.type} 
                    value={this.props.value} 
                    onChange={() => {
                        this.props.set(
                            document.getElementById(this.props.id).value, 
                            this.props.typeInput
                        );
                    }} 
                    placeholder={this.props.placeholder}
                    className='input'
                />
                <img src={this.props.icon} height='18vmin' width='18vmin'/>
            </FlexView>
        );
    }
}
