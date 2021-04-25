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
                        <Route path="/about" classNames="fade-enter-active" component={AboutScreen}/>
                    
                        <Route path="/skill" component={SkillScreen} />
                        
                        <Route path="/" component={HomeScreen} />

                        <Route path="/proyects" component={ProyectsScreen} />

                        <Route path="/proyect/:idproyect" component={ProyectSingle} />

                        <Redirect to="/" />

                    </Switch>
                </AnimatePresence>
            </div>
            
        </Router>
    )
}
