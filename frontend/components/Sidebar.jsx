import styles from '../styles/Sidebar.module.css';

export default function Sidebar( {minSliderValue, setMinSliderValue, maxSliderValue, setMaxSliderValue, 
                                  handleMinSliderChange, handleMaxSliderChange, checkedOptions, 
                                  setCheckedOptions, handleCheckboxChange} ) {
    return (
        <div className={styles.verticalnavbar}>  
            <TypeBoxes checkedOptions={checkedOptions} setCheckedOptions={setCheckedOptions} handleCheckboxChange={handleCheckboxChange}></TypeBoxes> 
            <DateSliders minSliderValue={minSliderValue} maxSliderValue={maxSliderValue} setMinSliderValue={setMinSliderValue}
                            setMaxSliderValue={setMaxSliderValue} handleMinSliderChange={handleMinSliderChange} handleMaxSliderChange={handleMaxSliderChange}></DateSliders>
        </div>
    )
}

function DateSliders( {minSliderValue, maxSliderValue, handleMinSliderChange, handleMaxSliderChange} ) {
    return (
        <div className={styles.slidercontainer}>
            <div>
                <label htmlFor="minSlider"
                style={{fontSize: '20px', fontWeight: 'bold', paddingLeft: '50px', color: '#fb8500'}}>
                Date Range</label>

                <input 
                style={{paddingTop: '25px'}}
                className={styles.sliderinput}
                type="range"
                id="minSlider"
                name="minSlider"
                min="0"
                max="2023"
                step="1"
                value={minSliderValue}
                onChange={handleMinSliderChange}
                />
                <br></br>

                <h4 style={{color: '#fb8500'}}>{minSliderValue} CE</h4>

                <label htmlFor="maxSlider"></label>

                <input style={{paddingTop: '25px'}}
                type="range"
                id="maxSlider"
                name="maxSlider"
                min="0"
                max="2023"
                step="1"
                value={maxSliderValue}
                onChange={handleMaxSliderChange}
                />
                <br></br>

                <h4 style={{color: '#fb8500'}}>{maxSliderValue} CE</h4>
            </div>
        </div>
    )
}

function TypeBoxes( {checkedOptions, handleCheckboxChange} ) {
    return (
        <div className={styles.typescontainer}>
            <div className={styles.typeboxes}>

                <h2 style={{fontSize: '30px', paddingLeft: '35px', color: '#fb8500'}}>Categories</h2>
                
                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px', color: '#fb8500'}}
                    type="checkbox"
                    name="battle"
                    value="battle"
                    checked={checkedOptions.includes('battle')}
                    onChange={handleCheckboxChange}
                /> Battle
                </label>
                
                
                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px'}}
                    type="checkbox"
                    name="discovery"
                    value="discovery"
                    checked={checkedOptions.includes('discovery')}
                    onChange={handleCheckboxChange}
                /> Discovery
                </label>
                
                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px'}}
                    type="checkbox"
                    name="invention"
                    value="invention"
                    checked={checkedOptions.includes('invention')}
                    onChange={handleCheckboxChange}
                /> Invention
                </label>

                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px'}}
                    type="checkbox"
                    name="cultural"
                    value="cultural"
                    checked={checkedOptions.includes('cultural')}
                    onChange={handleCheckboxChange}
                /> Cultural
                </label>

                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px'}}
                    type="checkbox"
                    name="birth"
                    value="birth"
                    checked={checkedOptions.includes('birth')}
                    onChange={handleCheckboxChange}
                /> Famous Birth
                </label>

                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px'}}
                    type="checkbox"
                    name="death"
                    value="death"
                    checked={checkedOptions.includes('death')}
                    onChange={handleCheckboxChange}
                /> Famous Death
                </label>

                <label style={{color: '#fb8500'}}>
                <input
                    style={{marginTop: '10px', marginBottom: '10px'}}
                    type="checkbox"
                    name="movement"
                    value="movement"
                    checked={checkedOptions.includes('movement')}
                    onChange={handleCheckboxChange}
                /> Movement
                </label>
            </div>
        </div>
    )
}