import React from 'react';
import ReactDom from 'react-dom'
import { createMemoryHistory } from 'history'
import App from './App'

//Mount function to start up the app
const launch = (el, { onNavigate }) => {
    const history = createMemoryHistory();
    if (onNavigate){
        history.listen(onNavigate);
    }
   

    ReactDom.render(<App history={history} />, el);

    return {
        onParentNavigate({pathname}) {
            const myPath = history.location;

            if(pathname !== myPath){
                history.push(pathname);
            }
        }
    }
};

//If we are in development and in isolation, call app imediately
if(process.env.NODE_ENV =="development"){
   let dev = document.querySelector('#_transactions-root');
    
    if (dev) {
       launch(dev, {});
    }
}

export { launch }