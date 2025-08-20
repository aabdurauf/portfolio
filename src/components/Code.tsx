const Code = () => {
  return (
    <>
      <div className="px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="cursor-pointer rounded-full w-3 h-3 bg-red-400"></div>
          <div className="cursor-pointer rounded-full w-3 h-3 bg-orange-400"></div>
          <div className="cursor-pointer rounded-full w-3 h-3 bg-green-200"></div>
        </div>
      </div>
      <div className="px-8 py-8 border-t-[2px] overflow-hidden">
        <code>
          <div className="blink">
            <span className="font-mono text-pink-500 mr-2">const</span>
            <span className="font-mono text-white mr-2">coder</span>
            <span className="font-mono text-pink-500 mr-2">=</span>
            <span className="font-mono text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="font-mono text-white ml-8 mr-2">name:</span>
            <span className="font-mono text-gray-400">'</span>
            <span className="font-mono text-amber-300">Abdurauf</span>
            <span className="font-mono text-gray-400">',</span>
          </div>
          <div>
            <span className="font-mono text-white ml-8 mr-2">skills:</span>
            <span className="font-mono text-gray-400">['</span>
            <span className="font-mono text-amber-300">React</span>
            <span className="font-mono text-gray-400">', '</span>
            <span className="font-mono text-amber-300">JavaScript</span>
            <span className="font-mono text-gray-400">'],</span>
          </div>
          <div>
            <span className="font-mono text-white ml-8 mr-2">hardWorker:</span>
            <span className="font-mono text-orange-400">true</span>
            <span className="font-mono text-gray-400">,</span>
          </div>
          <div>
            <span className="font-mono text-white ml-8 mr-2">problemSolver:</span>
            <span className="font-mono text-orange-400">true</span>
            <span className="font-mono text-gray-400">,</span>
          </div>
          <div>
            <span className="font-mono text-green-400 ml-8 mr-2">hireable:</span>
            <span className="font-mono text-orange-400">function</span>
            <span className="font-mono text-gray-400">() {"{"}</span>
          </div>
          <div>
            <span className="font-mono text-orange-400 ml-16 mr-2">return</span>
            <span className="font-mono text-gray-400">(</span>
          </div>
          <div>
            <span className="font-mono text-cyan-400 ml-24">this.</span>
            <span className="font-mono text-white mr-2">hardWorker</span>
            <span className="font-mono text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span className="font-mono text-cyan-400 ml-24">this.</span>
            <span className="font-mono text-white mr-2">problemSolver</span>
            <span className="font-mono text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span className="font-mono text-cyan-400 ml-24">this.</span>
            <span className="font-mono text-white mr-2">skills.length</span>
            <span className="font-mono text-amber-300 mr-2">&gt;</span>
            <span className="font-mono text-orange-400">5</span>
          </div>
          <div>
            <span className="font-mono text-gray-400 ml-16 mr-2">);</span>
          </div>
          <div>
            <span className="font-mono text-gray-400 ml-8">{"}"}</span>
          </div>
          <div>
            <span className="font-mono text-gray-400">{"}"}</span>
          </div>
        </code>
      </div>
    </>
  )
}

export default Code