import React, { useState } from 'react';
interface ColorPickerProps {
  colors: string[]; // lista de cores em HEX ou classes Tailwind
  onSelect?: (color: string) => void;
}

const ColorPicker = ({ colors, onSelect }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSelect = (color: string) => {
    setSelectedColor(color);
    if (onSelect) onSelect(color);
  };

  return (
    <div className="flex gap-2 flex-wrap ">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => handleSelect(color)}
          style={{ backgroundColor: color }}
          className={`w-6 h-6 rounded-full border-2 border-gray-200 hover:border-black transition-all ${
            selectedColor === color ? 'ring-2 ring-offset-1 ring-black' : ''
          } cursor-pointer`}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
