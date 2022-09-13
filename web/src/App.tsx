import "./assets/css/main.css";

import logoImg from "./assets/images/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 font-Inter">
      <img src={logoImg} />

      <h1 className="text-5xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
        </h1>
    </div>
  );
}

export default App;
