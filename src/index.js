import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="aClass">
        <div className="anotherClass">
            <div className="aThirdClass">foo</div>
            <div className="aThirdClass">bar</div>
            <div className="aThirdClass">baz</div>
        </div>
    </div>
    ,
    document.getElementById('root')
);
registerServiceWorker();
