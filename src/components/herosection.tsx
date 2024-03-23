export default function HeroSection() {
  return (
    <>
      <div className="relative mt-8 mb-8 pt-12 pb-6 px-3 lg:px-6 container-fluid w-full overflow-hidden">
        <div className="card align-items-center justify-content-center border-0 overflow-hidden mt-n3 flex justify-center items-center min-h-[65vh]">
          <div
            className="relative w-full rounded-xl min-h-[65vh] bg-fixed bg-cover bg-center bg-hero-pattern"
            style={{ backgroundPosition: "center -60px" }}
          >
            <div className="relative w-full rounded-xl min-h-[65vh] bg-fixed bg-cover bg-center bg-[#1f1b2d] opacity-45" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="w-full max-w-[856px] mx-auto text-center">
                <h1
                  className=" px-[1.5rem] pb-4 font-semibold leading-[1.2] text-white mb-12"
                  style={{
                    fontSize: "clamp(1.425rem, 1.425rem + 2.1vw, 3rem)",
                  }}
                >
                  Easy way to find a perfect property
                </h1>
                <input
                  type="text"
                  placeholder="Location, Place"
                  className="py-[9.2px] px-[18px] rounded-lg w-11/12 lg:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
