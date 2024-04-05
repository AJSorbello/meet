import { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside"

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const ref = useOnclickOutside((e) => {
  if (expanded && !e.target.classList.contains('suggestions')) {
    setExpanded(false);
  }
});

  useEffect(() => {
    setSuggestions(allLocations);
  }, [allLocations, setSuggestions]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    }) : [];

    setQuery(value);
    setSuggestions(filteredLocations);
    
    let infoText;
    if (filteredLocations.length === 0) {
      infoText = "We can not find the city you are looking for. Please try another city"
    } else {
      infoText = ""
    }
    setInfoAlert(infoText);
  };
  
  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // to hide the list
    setCurrentCity(value);
    setInfoAlert("")
  };

  return (
    <div id="city-search" ref={ref}>
 <input
  type="text"
  className="city"
  id="citySearch"
  placeholder="Search for a city"
  value={query}
  onFocus={() => { setShowSuggestions(true); setExpanded(true);}}
  onBlur={() => { setTimeout(() => setShowSuggestions(false), 100); }}
  onChange={handleInputChanged}
/>
  {showSuggestions && expanded && (
    <ul className="suggestions">
      {suggestions.map((suggestion) => {
        return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
      })}
      <li key='See all cities' onClick={handleItemClicked}>
        <b>See all cities</b>
      </li>
    </ul>
  )}
</div>
  );
};

export default CitySearch;