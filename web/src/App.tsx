import "./assets/css/main.css";

import logoImg from "./assets/images/logo.svg";
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="text-5xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="flex gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./Group 1.png" />
          <div className="absolute left-0 bottom-0 right-0 bg-game-gradient pt-16 px-4 pb-4">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./Group 2.png" />
          <div className="absolute left-0 bottom-0 right-0 bg-game-gradient pt-16 px-4 pb-4">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./Group 3.png" />
          <div className="absolute left-0 bottom-0 right-0 bg-game-gradient pt-16 px-4 pb-4">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./Group 1.png" />
          <div className="absolute left-0 bottom-0 right-0 bg-game-gradient pt-16 px-4 pb-4">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./Group 2.png" />
          <div className="absolute left-0 bottom-0 right-0 bg-game-gradient pt-16 px-4 pb-4">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./Group 3.png" />
          <div className="absolute left-0 bottom-0 right-0 bg-game-gradient pt-16 px-4 pb-4">
            <strong className="text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 Anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-nlw-gradient w-full mt-8 pt-1 rounded-t-lg ">
        <div className="bg-[#2A2634] rounded-t-md w-full px-8 py-6 flex justify-between items-center">
          <div>

            <span className="block font-bold text-white text-2xl">Não encontrou seu duo?</span>
            <span className="block text-sm text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-3 text-white bg-violet-500 hover:bg-violet-600 rounded">
            <MagnifyingGlassPlus size={24} />Publicar anúncio
          </button>
        </div>
      </div>


    </div>
  );
}

export default App;
