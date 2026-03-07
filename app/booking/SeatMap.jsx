import React from 'react';

const SeatMap = ({ gridData, stageData, selectedSeats, setSelectedSeats }) => {

    const toggleSeat = (id, originalColor) => {
        const colorLower = originalColor.toLowerCase();

        // Create a new Map to trigger re-renders
        const newSelectedSeats = new Map(selectedSeats);

        if (newSelectedSeats.has(id)) {
            newSelectedSeats.delete(id);
        } else {
            // Validation check: Max 4 per color category
            let currentCatCount = 0;
            newSelectedSeats.forEach((c) => {
                if (c === colorLower) {
                    currentCatCount++;
                }
            });

            if (currentCatCount >= 4) {
                alert("Validation Error: You can only select up to 4 seats from this category.");
                return;
            }

            newSelectedSeats.set(id, colorLower);
        }

        setSelectedSeats(newSelectedSeats);
    };

    if (!gridData) return null;

    // Calculate pixel width based on columns (45px width + 4px gap = 49px per cell approx)
    let maxCols = 0;
    gridData.forEach(r => { if (r.length > maxCols) maxCols = r.length; });
    const mapPixelWidth = (maxCols * 49) - 4;

    return (
        <div id="seat-map" className="bg-[#2c2c2c] p-5 rounded-xl border border-[#343a40] overflow-auto max-w-full max-h-[70vh] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] grid">

            {/* Stage */}
            {stageData && (
                <div
                    className="py-4 my-0 mb-7 text-center font-bold text-sm uppercase tracking-[3px] rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] opacity-80 border border-white/10"
                    style={{
                        backgroundColor: stageData.color,
                        width: `${mapPixelWidth}px`,
                        margin: '0 auto 20px auto',
                        color: stageData.color !== '#ffffff' ? '#ffffff' : 'inherit'
                    }}
                >
                    {stageData.text}
                </div>
            )}

            {/* Grid */}
            {gridData.map((rowData, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 mb-1.5 justify-center min-w-max">
                    {rowData.map((cell, cellIndex) => {
                        if (!cell.text || cell.text.trim() === "" || cell.color === "#ffffff") {
                            return <div key={cellIndex} className="w-10 h-[35px] invisible pointer-events-none md:w-8 md:h-7"></div>;
                        }

                        const isOccupied = cell.color === '#ff0000';
                        const isSelected = selectedSeats.has(cell.text);

                        // Visual Override for Dark Green
                        let backgroundColor = cell.color;
                        if (cell.color === '#00ff00') {
                            backgroundColor = '#007d1f';
                        }
                        if (isSelected) {
                            backgroundColor = ''; // Will be handled by CSS .selected class
                        }

                        // Base vs selected vs occupied tailwind state classes
                        let stateClasses = "text-white/90 border-2 border-white/5 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_2px_0_rgba(0,0,0,0.2)] hover:scale-115 hover:z-10 hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)]";
                        if (isOccupied) {
                            stateClasses = "!bg-[#dc3545] !text-white cursor-not-allowed opacity-50 shadow-none border-2 border-white/5 hover:scale-100 hover:shadow-none";
                        } else if (isSelected) {
                            stateClasses = "!bg-[#fd7e14] !text-black border-2 border-white scale-110 shadow-[0_0_0_2px_rgba(255,255,255,0.2)] z-5 hover:scale-115";
                        }

                        return (
                            <div
                                key={cellIndex}
                                id={`seat-${cell.text}`}
                                className={`w-10 h-[35px] flex items-center justify-center text-xs font-bold rounded-md cursor-pointer box-border md:w-8 md:h-7 md:text-[10px] ${stateClasses}`}
                                style={{ backgroundColor: !isSelected && !isOccupied ? backgroundColor : undefined }}
                                title={isOccupied ? "Booked" : undefined}
                                onClick={() => !isOccupied && toggleSeat(cell.text, cell.color)}
                            >
                                {cell.text}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default SeatMap;
