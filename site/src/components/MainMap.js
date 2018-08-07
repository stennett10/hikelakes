import React from 'react'
import ReactMapGL from 'react-map-gl'
import { rhythm } from '../utils/typography'

const TOKEN = 'pk.eyJ1Ijoic3Rlbm5ldHQxMCIsImEiOiJjamtrNGU0enoxZ3R6M2tvNjdva29panRyIn0.J47crwno2_JPZ2mZ-4aBKQ';

class MainMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 54.4607893,
                longitude: -3.0875158,
                zoom: 9,
                bearing: 0,
                pitch: 0,
                width: '100',
                height: '500',
            }
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ viewport: { ...this.state.viewport, width: window.innerWidth } });
    }

    render() {
        const { viewport } = this.state;

        return (
            <div>

                <ReactMapGL
                    {...viewport}
                    mapStyle="mapbox://styles/stennett10/cjkk36mss52j62sqqfkd9h7g7"
                    mapboxApiAccessToken={TOKEN}>

                </ReactMapGL>
            </div>
        )
    }
}

export default MainMap
