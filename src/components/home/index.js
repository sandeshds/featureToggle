import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';
import { Checkbox, Loader, Dimmer, Header, Segment } from 'semantic-ui-react'


class Home extends Component {

    constructor(props) {
        super(props);
        this.displayFeatures = this.displayFeatures.bind(this);
        this.state = {
            switch_1: true,
        }
    }

    componentDidMount(){
        this.props.fetchFeatures()
    }

    displayFeatures() {
        return map(this.props.features, (feature, index) => {
            return <Checkbox toggle label={index} checked={feature} onChange={(event, data) => {this.props.toggleState(data.label)}}/>
        });
    }

    render() {
        return (
            <div>
                <Header as='h2' attached='top'>
                    Feature Toggles
                </Header>
                {this.props.showFeatureLoader ? <Dimmer active>
                        <Loader>updating feature</Loader>
                    </Dimmer> : ""}
                <Segment attached>
                    {this.props.allFeaturesLoader ? <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer> : this.displayFeatures()}
                </Segment>
            </div>
        )
    }
}

Home.propTypes = Object.assign({}, Component.propTypes, {
})

export default Home