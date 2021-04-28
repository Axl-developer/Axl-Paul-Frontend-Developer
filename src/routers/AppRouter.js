import { AnimatePresence } from 'framer-motion';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  
import { AboutScreen } from '../components/About/AboutScreen';
import { HomeScreen } from '../components/Home/HomeScreen';
import { ProyectSingle } from '../components/Proyects/proyectSingle';
import { ProyectsScreen } from '../components/Proyects/ProyectsScreen';
import { SkillScreen } from '../components/Skill/SkillScreen';
import { Navbar } from '../components/UI/Navbar';

export const AppRouter = () => {


    return (
        <Router>
            
            <Navbar />
            <div className="switch-content">
                <AnimatePresence>
                    <Switch>
                        <Route exact path="/about" classNames="fade-enter-active" component={AboutScreen}/>
                    
                        <Route exact path="/skill" component={SkillScreen} />
                        
                        <Route exact path="/home" component={HomeScreen} />

                        <Route exact path="/proyects" component={ProyectsScreen} />

                        <Route exact path="/proyect/:idproyect" component={ProyectSingle} />

                        <Redirect to="/home" />

                    </Switch>
                </AnimatePresence>
            </div>
            
        </Router>
    )
}
