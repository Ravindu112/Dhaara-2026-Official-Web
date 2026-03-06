import React, { memo } from "react";

/* -------------------- DATA -------------------- */

const timelineData = [
  { id: 1, title: "Applications Calling", date: "2026-01-25", happened: true },
  { id: 2, title: "VOCAL TRAINING WORKSHOP", date: "2026-02-12", happened: true },
  { id: 3, title: "1ST ROUND AUDITIONS - DAY 1", date: "2026-02-18", happened: true },
  { id: 4, title: "1ST ROUND AUDITIONS - DAY 2", date: "2026-02-19", happened: true },
  { id: 5, title: "Stage Performing Workshop", date: "2026-02-24", happened: true },
  { id: 6, title: "Event Management Workshop", date: "2026-02-26", happened: true },
  { id: 7, title: "1ST ROUND AUDITIONS - DAY 3", date: "2026-03-04", happened: true },
  { id: 8, title: "Semi Final", date: "2026-03-19", happened: false },
  { id: 9, title: "Final", date: "2026-04-24", happened: false }
];

/* -------------------- HELPER -------------------- */

const formatDate = (date) =>
  new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/* -------------------- ITEM -------------------- */

const TimelineItem = memo(({ data, index }) => {
  const isEven = index % 2 === 0;
  const active = data.happened;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 w-full
      ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Spacer */}
      <div className="hidden md:block w-5/12"></div>

      {/* Dot */}
      <div
        className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-20
        ${active
            ? "bg-amber-400 ring-2 ring-amber-400/50"
            : "bg-gray-700 border-2 border-slate-900"
          }
        top-0 md:top-1/2 md:-translate-y-1/2`}
      />

      {/* Connector */}
      <div
        className={`absolute h-[2px] hidden md:block
        ${active ? "bg-amber-400" : "bg-gray-700"}
        top-1/2 -translate-y-1/2
        ${isEven ? "right-1/2 w-1/12" : "left-1/2 w-1/12"}`}
      />

      {/* Card */}
      <div
        className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-5/12 px-6 py-4 rounded-xl
        border border-slate-700/40
        transition-transform duration-300 hover:scale-[1.03]
        ${active
            ? "bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900"
            : "bg-slate-900/40 backdrop-blur-md text-gray-200"
          }
        ${isEven ? "md:text-right" : "md:text-left"}`}
      >
        <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide">
          {data.title}
        </h3>

        <p
          className={`text-sm mt-1 font-medium ${active ? "text-slate-800" : "text-amber-400"
            }`}
        >
          {formatDate(data.date)}
        </p>
      </div>
    </div>
  );
});

/* -------------------- MAIN -------------------- */

const Timeline = () => {
  const totalItems = timelineData.length;

  let lastActiveIndex = -1;
  timelineData.forEach((item, i) => {
    if (item.happened) lastActiveIndex = i;
  });

  const progressHeight =
    lastActiveIndex >= 0
      ? (lastActiveIndex / (totalItems - 1)) * 100
      : 0;

  return (
    <section
      id="timeline"
      className="relative py-24 px-4 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Title */}
        <h2
          className="text-4xl md:text-7xl font-black text-center uppercase mb-16
          bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        >
          Dhaara Roadmap
        </h2>

        <div className="relative">

          {/* Background line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-full w-[2px] bg-gray-700"></div>

          {/* Progress line */}
          <div
            style={{ height: `${progressHeight}%` }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 w-[2px] bg-amber-400"
          ></div>

          {/* Items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Timeline;