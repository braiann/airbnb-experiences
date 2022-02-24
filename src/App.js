import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles.css'
import Card from './components/Card';
import data from './data'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    let cards = data.map(d => <Card
            key={d.id}
            img={d.coverImg}
            rating={d.stats.rating}
            reviewCount={d.stats.reviewCount}
            location={d.location}
            title={d.title}
            price={136}
            openSpots={d.openSpots}
        />
    );
    console.log(cards);
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
}