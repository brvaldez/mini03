import React from "react";

const GroceryItemRow = ({
  item,
  isEditing,
  editingValue,
  onEditingChange,
  onSave,
  onCancel,
  onEdit,
  onRemove,
}) => {
  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <input
            className="edit-item-input"
            type="text"
            value={editingValue}
            onChange={(e) => onEditingChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSave();
              if (e.key === "Escape") onCancel();
            }}
            aria-label={`Edit ${item}`}
            autoFocus
          />
          <div className="item-actions">
            <button type="button" onClick={onSave}>
              Save
            </button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{item}</span>
          <div className="item-actions">
            <button type="button" onClick={onEdit} aria-label={`Edit ${item}`}>
              Edit
            </button>
            <button type="button" onClick={onRemove} aria-label={`Remove ${item}`}>
              Remove
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default GroceryItemRow;
