import React from 'react';
import { useTicketsCountdown } from './useTicketsCountdown';
import TicketsCountdown from './TicketsCountdown';
import Tickets from './Tickets';

const TicketSection = () => {
  const timeLeft = useTicketsCountdown();

  // If timeLeft is not null, the release date hasn't arrived yet
  return (
    <div className="transition-all duration-700 ease-in-out">
      {timeLeft ? (
        <TicketsCountdown timeLeft={timeLeft} />
      ) : (
        <Tickets />
      )}
    </div>
  );
};

export default TicketSection;