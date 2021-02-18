import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Home extends React.Component{


    render(){
        return(
            <div>
                <NavLink to='/chose'>Choisir</NavLink>
                <NavLink to='/field'>Champ</NavLink>
                <NavLink to='/controls'>Controle</NavLink>
            </div>
        )
      
    }
  }

export default Home;