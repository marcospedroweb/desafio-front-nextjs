import React, { useState } from 'react';
interface ColorPickerProps {
  colors?: string[];
  onSelect?: (color: string) => void;
}

const colorsPicker = [
  '#7d2e27',
  '#32619d',
  '#4b5d74',
  '#5a9ec1',
  '#7fbb02',
  '#424242',
  '#eeeeee',
  '#8a2b0f',
  '#64f735',
  '#0fe8b8',
  '#5a9ec0',
  '#ff6100',
  '#ffaf01',
  '#2e1e41',
];

const ColorPicker = ({ colors = colorsPicker, onSelect }: ColorPickerProps) => {
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
