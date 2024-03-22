import Image from "next/image";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <div className="my-5 pt-12 px-3 lg:px-6 pb-lg-4 px-xxl-4 container-fluid w-full overflow-hidden">
        <div className="flex mt-5 justify-center min-h-[65vh]">
          <div
            className="w-full rounded-xl min-h-[65vh] bg-fixed bg-cover bg-center bg-hero-pattern"
            style={{ backgroundPosition: "center -60px" }}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1>Easy way to find a perfect property</h1>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <input
              type="text"
              placeholder="Location, Place"
              className="p-2 px-4 w-full rounded mx-auto"
              style={{ maxWidth: "856px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
    </main>
  );
}
