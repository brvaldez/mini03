import React, { useState } from "react";
import GroceryItemRow from "./GroceryItemRow";
import SuggestionButtons from "./SuggestionButtons";

const SUGGESTIONS = ["Milk", "Bread", "Eggs", "Bananas", "Chicken"];

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = newItem.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, trimmed]);
    setNewItem("");
  };

  const handleAddSuggestion = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleRemove = (targetIndex) => {
    setItems((prev) => prev.filter((_, index) => index !== targetIndex));
    if (editingIndex === targetIndex) {
      setEditingIndex(null);
      setEditingValue("");
    } else if (editingIndex !== null && targetIndex < editingIndex) {
      setEditingIndex((prev) => prev - 1);
    }
  };

  const handleStartEdit = (targetIndex) => {
    setEditingIndex(targetIndex);
    setEditingValue(items[targetIndex]);
  };

  const handleSaveEdit = () => {
    if (editingIndex === null) return;
    const trimmed = editingValue.trim();
    if (!trimmed) return;
    setItems((prev) =>
      prev.map((item, index) => (index === editingIndex ? trimmed : item))
    );
    setEditingIndex(null);
    setEditingValue("");
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <section className="grocery-list">
      <SuggestionButtons
        suggestions={SUGGESTIONS}
        onAddSuggestion={handleAddSuggestion}
      />

      <h2>My list</h2>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add an item..."
          aria-label="New item"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <GroceryItemRow
            key={`${item}-${index}`}
            item={item}
            isEditing={editingIndex === index}
            editingValue={editingValue}
            onEditingChange={setEditingValue}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            onEdit={() => handleStartEdit(index)}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </ul>
    </section>
  );
};

export default GroceryList;
