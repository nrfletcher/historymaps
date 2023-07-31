import { useState } from 'react';
import styles from '../styles/Slider.module.css';

export default function Slider() {
    const [minSliderValue, setMinSliderValue] = useState(20);
    const [maxSliderValue, setMaxSliderValue] = useState(80);

    const handleMinSliderChange = (event) => {
        setMinSliderValue(parseInt(event.target.value));
    }

    const handleMaxSliderChange = (event) => {
        setMaxSliderValue(parseInt(event.target.value));
    }

    return (
        <div className={styles.slidercontainer}>
            <h2>Range Slider Example</h2>
            <div className={styles.slidertrack}>
                <label htmlFor="minSlider">Min Value:</label>
                <input className={styles.sliderinput}
                type="range"
                id="minSlider"
                name="minSlider"
                min="0"
                max="100"
                step="1"
                value={minSliderValue}
                onChange={handleMinSliderChange}
                />
            
                <label htmlFor="maxSlider">Max Value:</label>
                <input
                type="range"
                id="maxSlider"
                name="maxSlider"
                min="0"
                max="100"
                step="1"
                value={maxSliderValue}
                onChange={handleMaxSliderChange}
                />
                <span>{maxSliderValue}</span>
                <span>{minSliderValue}</span>
            </div>
        </div>
    )
}