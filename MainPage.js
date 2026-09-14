// MainPage.js / LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="container text-center mt-5">
            {/* Project Title */}
            <h1 className="display-4 fw-bold">GiftLink</h1>
            
            {/* Tagline / Description */}
            <p className="lead mt-3 text-muted">
                Share what you don't need, find what you do. The community gift platform connecting generous neighbors.
            </p>
            
            {/* Get Started Button */}
            <div className="mt-4">
                <Link to="/app" className="btn btn-primary btn-lg px-4 me-md-2">
                    Get Started
                </Link>
            </div>
        </div>
    );
}

export default MainPage;