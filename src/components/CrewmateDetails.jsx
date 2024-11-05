import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import './CrewmateDetails.css';

const CrewDetailMessage = ({ speed }) => {
    if (speed > 50) {
        return <p>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</p>;
    } else {
        return <p>This Crewmate has a steady speed, ready for any mission! 🚀</p>;
    }
};

const CrewmateDetails = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
            if (error) console.error('Error fetching crewmate:', error);
            else setCrewmate(data);
        };

        fetchCrewmate();
    }, [id]);

    if (!crewmate) return <p>Loading...</p>;

    return (
        <div className="crewmate-details">
            <h1>Crewmate: {crewmate.name}</h1>
            <h2>Stats:</h2>
            <p>Color: {crewmate.color}</p>
            <p>Speed: {crewmate.speed} mph</p>
            <CrewDetailMessage speed={crewmate.speed} />
            <Link to={`/crewmates/${id}`}>
                <button>Wanna edit this Crewmate?</button>
            </Link>
        </div>
    );
};

export default CrewmateDetails;