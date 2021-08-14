import ProfileImg from 'assets/profile.webp'
import GitHub from 'assets/github';
import Linkedin from 'assets/linkedin';

export default function Home() {
  return (
    <div className="h-screen flex justify-center bg-gray-800 lg:bg-gradient-to-b from-gray-900 to-gray-600">
      <div className="flex flex-col lg:flex-row w-full lg:max-w-2xl lg:max-h-72 bg-white self-center lg:rounded-3xl shadow-2xl">
        <img className="w-36 h-36 -mt-16  rounded-full self-center lg:mt-0 lg:rounded-none lg:h-72 lg:w-72" src={ProfileImg} alt="Rômulo Rocha" />
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8 text-center lg:text-justify ">
            <p className="text-sm text-grey-dark">
              Desenvolvedor Full stack
            </p>
            <div className="text-black font-bold text-xl mb-2">Quem eu sou?</div>
            <p className="text-grey-darker text-base">
              Atuo como desenvolvedor desde 2017.
              Trabalho com as principais tecnologias do mercado:
              NodeJs, ReactJs e React Native.
              Meu filme e série favoritos são Matrix e Dark
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-black leading-none">Rômulo Rocha</p>
              <p className="text-grey-dark">Brasileiro, 26 anos</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-between items-center">
              <a href="https://github.com/romulo94" target="_blank" rel="noreferrer">
                <GitHub size={16} style={{cursor:'pointer', marginRight: 12}}></GitHub>
              </a>
              <a href="https://www.linkedin.com/in/romulo-rocha-de-oliveira" target="_blank" rel="noreferrer">
                <Linkedin size={16} style={{cursor:'pointer'}}></Linkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
