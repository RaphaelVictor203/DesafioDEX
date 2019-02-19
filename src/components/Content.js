import React from 'react';
import './css/Content.css';
import Parse from 'parse';
import MenuTop from './MenuTop';
import FlexView from 'react-flexview';
import { Col, Row } from 'react-flexbox-grid';
import ItemList from './ItemList';
import LoadScreen from './LoadScreen';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = { listSel: 'FOODS', itemsLoaded: false, items: [], loadingItens: false };
        this.setItens = this.setItens.bind(this);
    }

    componentWillMount(){
        Parse.serverURL = 'http://localhost:1337/parse';
        Parse.initialize('OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga', 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga')
        this.checkLogIn();

        this.setState({loadingItens: true});

        this.selectItems(this.state.listSel);

    }

    checkLogIn(){
        let url = window.location.href;
        if(url.indexOf('?') != -1 && url.split('?').length == 3){
            let cont = url.split('?');
            let email = atob(cont[1]);
            let password = atob(cont[2]);
            Parse.User.logIn(email, password)
            .then(
                (result) => {},
                (err) => {
                    alert("Error: " + err.message);
                    window.location.href = 'http://localhost:3000';
                }
            );
        }else{
            window.location.href = 'http://localhost:3000';
        }
    }

    selectItems(optSel){
        let result = '';
        switch(optSel){
            case 'FOODS':
                result = 'getAllFoods';
                break;
            case 'PEOPLE':
                result = 'getAllPeople';
                break;
            case 'PLACES':
                result = 'getAllPlaces';
                break;
        }

        Parse.Cloud.run(result).then(
            (rsp) => {
                this.setState({itemsLoaded : true, items: rsp});
                this.setState({loadingItens: false});
            }, err => {
                this.setState({loadingItens: false});
            }
        );
    }

    setItens(optSel){
        this.setState({itemsLoaded : false});
        this.setState({loadingItens: true});
        this.setState({listSel: optSel});
        
        this.selectItems(optSel);
    }

    renderItems(){
        let items = [];
        for (var i = 0; i < this.state.items.length - 1; i++) {
            let item = this.state.items[i].toJSON();
            items.push(<ItemList key={i} title={item.name} background={item.link}/>);
        }
        return(items);
    }


    render(){
        return(
            <div className="content">
                    <MenuTop setItens={this.setItens} loadingItens={this.state.loadingItens} />
                    <PerfectScrollbar className="view-content">
                            <div style={{
                            width: '100%',
                            height: '15vmin',
                            boxShadow: '0px 1px 10px rgba(155, 155, 155, .6)',
                            marginBottom: '5vmin',
                            zIndex: '0'
                        }}>

                        </div>
                        <FlexView vAlignContent="top" hAlignContent="center" className="view-content">
                            <Col style={{marginLeft: '12vmin'}}>
                                <Row>
                                    <p style={{
                                        width: '134vmin', 
                                        fontFamily: 'open sans semibold', 
                                        color: '#4A4A4A',
                                        fontSize: '2.7vmin'
                                        }}>LIST OF {this.state.listSel}</p>
                                </Row>
                                <Row>
                                    <div style={{
                                        width: '137.5vmin', 
                                        height: '.8vmin', 
                                        background: 'linear-gradient(to right, #AE23A9, #DC4E1B)',
                                        marginTop: '-1vmin'
                                    }}></div>
                                </Row>
                                <Row>
                                    <div style={{
                                        width: '149vmin',
                                        height: 'auto',
                                        marginTop: '5.1vmin'
                                    }}>
                                        {
                                            this.state.itemsLoaded ? this.renderItems() : <LoadScreen />
                                        }
                                    </div>
                                </Row>
                            </Col>
                        </FlexView>
                    </PerfectScrollbar>
            </div>
        );
    }
}
