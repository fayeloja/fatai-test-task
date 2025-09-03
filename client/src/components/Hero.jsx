function Hero() {
  return (
    <section className="bg-[url('/hero-bg.jpeg')] bg-cover bg-center h-[80vh] flex items-center text-col relative text-background-light-gray">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center w-[380px] h-[323px]">
        <h1 className="mb-6">Test assignment for front-end developer</h1>
        <p className="leading-body mb-8 mx-auto">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className="button">Sign up</button>
      </div>
    </section>
  );
}

export default Hero;
