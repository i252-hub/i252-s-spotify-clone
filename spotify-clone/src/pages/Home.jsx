import Sidebar from "../components/sidebar";

function Home() {

  return (
    <>
      <div className="w-screen h-screen bg-white">
        <div className="grid grid-cols-[20%_80%] h-full">
         <Sidebar/>
          <div className="bg-gradient-to-r from-[#3333A3] to-[#121212] h-full"></div>
        </div>
      </div>
       
    </>
  )
}

export default Home;
