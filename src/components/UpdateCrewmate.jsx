import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './UpdateCrewmate.css';

const UpdateCrewmate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [crewmate, setCrewmate] = useState(null);
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        fetchCrewmate();
    }, [id]);

    const fetchCrewmate = async () => {
        const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
        if (error) {
            console.error('Error fetching crewmate:', error);
        } else {
            setCrewmate(data);
            setName(data.name);
            setSpeed(data.speed);
            setColor(data.color);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('crewmates')
            .update({ name, speed, color })
            .eq('id', id);

        if (error) {
            console.error('Error updating crewmate:', error);
        } else {
            alert('Crewmate updated successfully!');
            navigate('/gallery');
        }
    };

    const handleDelete = async () => {
        const { error } = await supabase.from('crewmates').delete().eq('id', id);
        if (error) {
            console.error('Error deleting crewmate:', error);
        } else {
            alert('Crewmate deleted successfully!');
            navigate('/gallery');
        }
    };

    if (!crewmate) return <p>Loading...</p>;

    return (
        <div className="update-crewmate">
            <h2>Update Your Crewmate :)</h2>
            <div className="form-container">
                <div className="form-item">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter crewmate's name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-item">
                    <label>Speed (mph):</label>
                    <input
                        type="text"
                        placeholder="Enter speed in mph"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        required
                    />
                </div>
                <div className="form-item">
                    <label>Color:</label>
                    <div className="color-options">
                        {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'].map((option) => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    value={option}
                                    checked={color === option}
                                    onChange={(e) => setColor(e.target.value)}
                                    required
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <button type="submit" onClick={handleUpdate}>Update Crewmate</button>
            <button onClick={handleDelete} className="delete-button">Delete Crewmate</button>
        </div>
    );
};

export default UpdateCrewmate;