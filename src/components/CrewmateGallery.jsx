import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './CrewmateGallery.css';

const CrewmateGallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        fetchCrewmates();
    }, []);

    const fetchCrewmates = async () => {
        const { data, error } = await supabase.from('crewmates').select('*');
        if (error) {
            console.error('Error fetching crewmates:', error);
        } else {
            setCrewmates(data);
        }
    };

    return (
        <div className="gallery">
            <h2>Your Crewmate Gallery!</h2>
            {crewmates.length === 0 ? (
                <p className="no-crewmates-message">You haven't made a crewmate yet.</p>
            ) : (
                <div className="crewmate-list">
                    {crewmates.map((crewmate) => (
                        <div key={crewmate.id} className="crewmate-card">
                            <h3>{crewmate.name}</h3>
                            <p>Speed: {crewmate.speed} mph</p>
                            <p>Color: {crewmate.color}</p>
                            <Link to={`/crewmates/${crewmate.id}`}>Edit Crewmate</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CrewmateGallery;