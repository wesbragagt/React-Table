import React from 'react';
import ReactTable from 'react-table';
import Headers from './Headers';

import 'react-table/react-table.css';
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Table</h1>
                <ReactTable columns={Headers} />
            </div>
        );
    }
}

export default App;
