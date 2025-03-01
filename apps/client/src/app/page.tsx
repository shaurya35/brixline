import Navbar from "@/components/main/Navbar";


export default function Home() {
  return (
    <>
      <header className="relative h-[827px] w-full bg-[url('/main-image-mob.png')] sm:bg-[url('/main-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex justify-center items-center pt-6 px-6">
          <Navbar/>
        </div>
        <div className="relative text-white">sides</div>
      </header>
      <main className="bg-red-300 max-w-7xl">contents</main>
      <footer>footer</footer>
    </>
  );
}
