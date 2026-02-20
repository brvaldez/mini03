import React from "react";

const SuggestionButtons = ({ suggestions, onAddSuggestion }) => {
  return (
    <div className="suggestions">
      <h3>Suggestions</h3>
      <div className="suggestion-buttons">
        {suggestions.map((item) => (
          <button key={item} type="button" onClick={() => onAddSuggestion(item)}>
            + {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionButtons;
