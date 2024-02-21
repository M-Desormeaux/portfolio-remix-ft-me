export const Landing = () => {
  return (
    <div className="flex flex-col px-4 pb-10 pt-20 md:px-10">
      <div className="flex max-w-2xl flex-col gap-2">
        <p>Howdy there, I'm</p>
        <h1 className="w-fit text-5xl font-bold drop-shadow-sm md:text-6xl">
          Michael Desormeaux
        </h1>
        <hr />
        <p className="text-xl text-slate-800 md:text-2xl">
          A Frontend Developer with 2 years of experience in responsive and
          accessible interfaces. Looking forward to building interesting and
          impactful applications.
        </p>
      </div>
    </div>
  );
};
