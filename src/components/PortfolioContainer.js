import React , {useState} from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Foot from './Foot';
import {projectData} from '../data/projectData';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return (
                projectData.map((project) => (
                    <Portfolio name={project.name}
                          description={project.description}
                          languages = {project.languages}/>
                  ))
            )
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Foot />
        </div>
    )

}
