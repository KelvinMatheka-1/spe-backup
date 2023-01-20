import React from "react";

function About() {
    return (
        <div className="About-us">
      <h1 className="text-center text-2xl font-bold">ABOUT US</h1>
      <div class="grid grid-cols-2">
        <div className="font-sans text-lg">
          <p className="text-left">We pride ourselves on the vision, skills, expertise and professionalism of our team</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6 fill-slate-300 float-left">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
          <p className="text-left">Our team members make use of their keen Insight to foresee industry trends and meet demanding customer needs</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6 fill-slate-300 float-left">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
          <p className="text-left">Our services retain a competitive edge at all times.</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6 fill-slate-300 float-left">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
          <p className="text-left">We look at the Core Value of Integrity as the very soul of our company</p>
        </div>
        <div className="font-sans text-lg">
          <p className="text-left">
            We believe that strong relationships and innovation go hand-in-hand.We have worked faithfully with our customers to understand their needs,
            and we maintain vigilance with our industry partners to anticipate the demands of a rapidly changing field.
          </p>

        </div>
      </div>
      <br></br>
      <h1 className="text-center text-2xl font-bold">OUR TEAM</h1>
      <div class="flex flex-row gap-8 justify-center mt-16">
        <div class="basis-1/4 md:basis-1/3 ml-8">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert01.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>

        </div>

        <div class="basis-1/4 md:basis-1/3">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert02.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div class="basis-1/4 md:basis-1/3 mr-8 mb-16">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert03.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div class="flex flex-row gap-8">
        <div class="basis-1/4 md:basis-1/4 ml-8">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert01.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>

        </div>

        <div class="basis-1/4 md:basis-1/4">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert02.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div class="basis-1/4 md:basis-1/4">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert03.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div class="basis-1/4 md:basis-1/4 mr-8">
          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img class="w-24 h-24 rounded-full mx-auto" src="/assets/concert03.jpg"
              alt="" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <blockquote>
                <p class="text-lg font-sans">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

    </div >
);
}

export default About;