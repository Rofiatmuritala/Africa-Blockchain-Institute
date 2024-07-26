function About() {
  return (
    <>
      <div class="bg-white">
        <header class="bg-green-500 text-white text-center py-12">
          <h1 class="text-4xl font-bold mt-16">About Us</h1>
        </header>

        <section class="text-center py-12 px-4">
          <h2 class="text-2xl font-bold">Mission And Values</h2>
          <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our mission is to provide exceptional healthcare services with a
            focus on availability, reliability, and support.
          </p>
          <div class="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div class="transition transform hover:scale-110">
              <h3 class="text-xl font-bold">85+</h3>
              <p class="text-gray-700">Specialists</p>
            </div>
            <div class="transition transform hover:scale-110">
              <h3 class="text-xl font-bold">25+</h3>
              <p class="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </section>

        <section class="bg-green-500 text-white py-12 px-4">
          <h2 class="text-2xl font-bold text-center">Our Vision</h2>
          <p class="mt-4 text-center max-w-2xl mx-auto">
            Healthcare anytime, anywhere. We aim to revolutionize the healthcare
            industry by making quality healthcare accessible to everyone.
          </p>
        </section>

        {/* <footer class="bg-green-500 text-white text-center py-8">
          <p>
            &copy; Copyright [Your Name] . All rights reserved. Made By Binary
            Boats⛵
          </p>
        </footer> */}
      </div>
    </>
  );
}

export default About;
