import Slider from 'react-slider';
import styles from '../styles/Slider.module.css';

const RangeSliderComponent = ({ value, onChange }) => {
  return (
    <div className={styles.slidercontainer}>
      <h2>Range Slider Example</h2>
      <Slider
        orientation='vertical'
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={onChange}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`slidertrack ${state.index === 0 ? 'lefttrack' : 'righttrack'}`}
          />
        )}
        renderThumb={(props, state) => <div {...props} className={`sliderthumb`} />}
      />
      <div className="slidervalues">
        <span>Min: {value[0]}</span>
        <span>Max: {value[1]}</span>
      </div>
    </div>
  );
};

export default RangeSliderComponent;