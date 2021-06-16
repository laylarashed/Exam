import React from 'react';
import {Router} from '@reach/router';
import LoginAndRegistration from './LoginAndRegistration';
import DashBoard from './DashBoard';
import AddNewPirate from './AddNewPirate';
import DisplayLocation from './DisplayLocation';

const Container = props => {
    return(
        <div>

            <Router>
                <LoginAndRegistration path = '/' />
                <DashBoard path ='/pirates'/>
                <AddNewPirate path ='/pirate/new'/>
                <DisplayLocation path ='/pirate/:id'/>
            </Router>

        </div>
    )
}

export default Container;