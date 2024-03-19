export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 mt-20">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div> */}

      <div className="relative flex-col text-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] 
      before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial 
      before:from-white before:to-transparent before:blur-2xl before:content-[''] 
      after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* className=" " */}
        <div className="text-9xl	 font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight">YouTube Video Summarizer</div>
        <div className="mt-4 text-lg leading-8 text-slate-400	">Paste the link of a public video from YouTube below to summarise.</div>
      </div>

      <div className="relative flex h-10 mt-32 w-full min-w-[200px] max-w-[500px]">
        <button
          className="!absolute right-1 top-1 z-10 select-none rounded bg-red-500 py-2 px-4 text-center align-middle 
          font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all 
          hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]
          active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500
           peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          Get Summary
        </button>
        <input
          type="email"
          className="peer h-full min-w-[500px] rounded-[7px] border 
          border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal 
          text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200
           placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-400 
           focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          required
        />
        <label className="before:content[' '] after:content[' ']
         pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] 
         font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px]
          before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t 
          before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px]
           after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow 
           after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all
            peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
            peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
             peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-400 peer-focus:before:border-t-2
              peer-focus:before:border-l-2 peer-focus:before:!border-red-400 peer-focus:after:border-t-2 
              peer-focus:after:border-r-2 peer-focus:after:!border-red-400 peer-disabled:text-transparent
               peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
               peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        https://
        </label>
      </div>
    </main>
  );
}
