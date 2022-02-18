import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles.css'
import Card from './components/Card';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    );
}