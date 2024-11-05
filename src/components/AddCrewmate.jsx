import { useState } from 'react';
import { supabase } from '../client';
import './AddCrewmate.css';

const AddCrewmate = () => {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('crewmates')
            .insert([{ name, speed, color }]);

        if (error) {
            console.error('Error adding crewmate:', error);
        } else {
            alert('Crewmate added successfully!');
            setName('');
            setSpeed('');
            setColor('');
        }
    };

    return (
        <div className="add-crewmate">
            <h2>Create a New Crewmate</h2>
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
            <button type="submit" onClick={handleSubmit}>Create Crewmate</button>
        </div>
    );
};

export default AddCrewmate;