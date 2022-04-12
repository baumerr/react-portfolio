import React from 'react';
import readme from '../../assets/project-pics/README.png';
import employee from '../../assets/project-pics/employee-tracker.png';
import marketplace from '../../assets/project-pics/marketplace.png';
import portfolio from '../../assets/project-pics/portfolio.png';
import notreddit from '../../assets/project-pics/reddit.png';
import team from '../../assets/project-pics/team-builder.png';


function Projects () {
    return (
        <section className='container'>
            <div className='row justify-content-around'>

                <div class="card col-3">
                <img src={readme} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">README Generator</h5>
                        <p className="card-text">A CLI application built using Node.js that generates a README.md file using user input.</p>
                        <a href="https://github.com/baumerr/README-generator" className="btn btn-primary">GitHub Repo</a>
                    </div>
                </div>

                <div class="card col-3">
                <img src={employee} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Employee Tracker</h5>
                        <p className="card-text">A CLI application built using Node.js that stores and manipulates employee data using SQL.</p>
                        <a href="https://github.com/baumerr/employee-tracker" className="btn btn-primary">GitHub Repo</a>
                    </div>
                </div>

                <div class="card col-3">
                <img src={marketplace} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Buy and Sell Marketplace</h5>
                        <p className="card-text">A Web App that lets users signup, post items, message users using Sequelize and Express.</p>
                        <a href="https://github.com/Qcent/project-poseidon" className="btn btn-primary">GitHub Repo</a>
                        <a href="https://project-team-poseidon.herokuapp.com/" className="btn btn-primary">Deployed Link</a>
                    </div>
                </div>
            </div>

            <div className='row justify-content-around'>

                <div class="card col-3">
                <img src={portfolio} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Portfolio Generator</h5>
                        <p className="card-text">A CLI application built using Node.js that generates a Portfolio Webpage based on user input.</p>
                        <a href="https://github.com/baumerr/portfolio-generator" className="btn btn-primary">GitHub Repo</a>
                    </div>
                </div>

                <div class="card col-3">
                <img src={notreddit} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Blog Site</h5>
                        <p className="card-text">A Web App that lets users signup, post blogs, upvote using Sequelize, Express and Handlebars.</p>
                        <a href="https://github.com/baumerr/best-social-media" className="btn btn-primary">GitHub Repo</a>
                        <a href="https://pacific-plains-96288.herokuapp.com/" className="btn btn-primary">Deployed Link</a>
                    </div>
                </div>

                <div class="card col-3">
                <img src={team} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Team Builder</h5>
                        <p className="card-text">A CLI application built using Node.js that generates a Team Page Website based on user input.</p>
                        <a href="https://github.com/baumerr/team-builder" className="btn btn-primary">GitHub Repo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;