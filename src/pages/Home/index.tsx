export default function Home() {
  return (
    <div className="h-screen flex justify-center bg-gray-800 lg:bg-gradient-to-b from-gray-900 to-gray-600">
      <div className="flex flex-col lg:flex-row w-full lg:max-w-2xl lg:max-h-72 bg-white self-center lg:rounded-3xl shadow-2xl">
        <img className="w-36 h-36 -mt-16  rounded-full self-center lg:mt-0 lg:rounded-none lg:h-72 lg:w-72" src="https://media-exp1.licdn.com/dms/image/C4E03AQHiSQ-0KS2Peg/profile-displayphoto-shrink_400_400/0/1536804335375?e=1616025600&v=beta&t=7MOJDGCUaSzzmN1JMQ9uIC_QR_Svib4M4NgSYxA4K8c" alt="" />
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
        </div>
      </div>
    </div>
  );
}
