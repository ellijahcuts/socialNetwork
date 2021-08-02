import React from 'react';
import preloaderGif from '../../assets/images/spinner.gif'

const Preloader = () => {
    return (<div>
            <img style={{width: 80}}
                 src={preloaderGif}
                 alt={'Loading...'}
            />
        </div>
    )
}

export default Preloader;
