import React from "react";
import './styles/App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import {projectData} from './data/projectData';

export default function App() {
    console.log('Rendering App');
    return <PortfolioContainer />
}
