const IndexPage = () => (
  <div className="bg-white">
    <main>
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <div className="flex items-center">
                <div className="bg-purple-300 transform p-3 mr-3 rotate-12 rounded-md bg-gradient-to-r from-purple-600 to-purple-800 md:p-4 md:mr-4"></div>
                <div className="text-2xl md:text-4xl tracking-widest font-montserrat">
                  PEYK
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  <span className="block">Bridge the gap between</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-800 block">
                    idea and reality
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-700">
                  We provide the design and development experience to help big
                  ideas reach their potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full lg:h-full lg:w-auto lg:max-w-none"
                src="/images/undraw_design_components_9vy6.svg"
                alt="Design components"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-16">
        <div className="flex flex-wrap space-y-24 md:mx-auto md:max-w-7xl md:px-8 lg:space-y-0">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:w-1/2 lg:py-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Fast and reliable websites
            </h2>
            <p className="mt-12 text-lg text-gray-700">
              We use the latest innovative technologies to build fast, secure
              and stable websites and apps. Using battle-tested SSGs like
              Next.JS and headless CMSs like Sanity we can deploy at any scale
              on platforms like Vercel and Netlify.
            </p>
            <div
              className="mt-12 grid grid-cols-5 gap-8"
              style={{ filter: "grayscale(100%)" }}
            >
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/reactjs-icon.svg"
                  alt="React"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/zeit-icon.svg"
                  alt="Vercel"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/netlify-icon.svg"
                  alt="Netlify"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/gatsbyjs-icon.svg"
                  alt="Gatsby"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/tailwindcss.svg"
                  alt="Tailwind"
                />
              </div>
            </div>
          </div>
          <div className="flex px-4 max-w-xl mx-auto sm:px-6 lg:w-1/2 lg:py-16">
            <img
              src="/images/undraw_experience_design_eq3j.svg"
              alt="Fast and reliable websites"
              className="self-center"
            />
          </div>

          <div className="flex px-4 max-w-xl mx-auto order-last sm:px-6 lg:w-1/2 lg:py-16 lg:order-none">
            <img
              src="/images/undraw_connected_world_wuay.svg"
              alt="Federated data and distributed systems"
              className="self-center"
            />
          </div>
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:w-1/2 lg:py-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              GraphQL + Apollo Federation
            </h2>
            <p className="mt-12 text-lg text-gray-700">
              We have been building production systems using GraphQL since
              before it was officially released. We work with cutting edge
              technologies like Apollo Federation to implement GraphQL schemas
              across microservice architectures.
            </p>
            <div
              className="mt-12 grid grid-cols-5 gap-8"
              style={{ filter: "grayscale(100%)" }}
            >
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/amazon-web-services-2.svg"
                  alt="AWS"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/apollographql-icon.svg"
                  alt="Apollo"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/graphql-icon.svg"
                  alt="GraphQL"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/serverless-icon.svg"
                  alt="Serverless"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <img
                  className="h-10 lg:h-12"
                  src="/images/prisma.svg"
                  alt="Prisma"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="mt-16" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>

      <p className="text-base text-center p-8">
        &copy; 2021 Peyk, Inc. All rights reserved.
      </p>
    </footer>
  </div>
);

export default IndexPage;
