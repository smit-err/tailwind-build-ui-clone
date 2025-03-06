import HorizontalLineWrapper from "@/components/horizontal-line-wrapper";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <div className="grid min-h-dvh max-w-screen grid-cols-1 justify-center overflow-x-hidden md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-xl))_var(--gutter-width)] lg:[--gutter-width:--spacing(10)]">
      <div className="bg-pattern col-start-1 row-span-full hidden h-full border-x border-gray-400/20 sm:block" />
      <div className="relative flex flex-col gap-18 px-4 pt-10 pb-30 sm:col-start-2 sm:px-0">
        <div className="absolute inset-x-0 top-0 left-1/5 -z-10 aspect-video opacity-50">
          <video autoPlay loop muted playsInline>
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 size-full bg-linear-to-r from-gray-950 to-75%" />
          <div className="absolute inset-0 size-full bg-linear-to-t from-gray-950 to-50%" />
        </div>
        <HorizontalLineWrapper>
          <div className="p-2">
            <Icons.TailwindDark className="aspect-auto w-44 sm:w-50" />
          </div>
        </HorizontalLineWrapper>
        <div className="flex flex-col gap-4">
          <HorizontalLineWrapper>
            <div className="space-y-2">
              <p className="font-ibm-mono text-sm font-normal text-gray-400 uppercase">
                5-part mini-course
              </p>
              <h1 className="text-5xl tracking-tighter text-balance sm:text-8xl">
                Build UIs that don&apos;t suck.
              </h1>
            </div>
          </HorizontalLineWrapper>
          <HorizontalLineWrapper>
            <p className="max-w-2xl text-lg font-medium text-balance text-gray-400">
              <span className="text-white">Short, tactical video lessons</span>{" "}
              from the creator of Tailwind CSS, delivered directly to your inbox{" "}
              <span className="text-white">every day for a week</span>.
            </p>
          </HorizontalLineWrapper>
          <HorizontalLineWrapper>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-nowrap text-black hover:bg-gray-100">
                Get the free course <Icons.ArrowRight className="size-4" />
              </button>
              <button className="flex items-center gap-1 rounded-full bg-white/25 px-4 py-2.5 text-sm font-semibold text-nowrap hover:bg-white/30">
                <Icons.PlayCircle className="size-5" />{" "}
                <span className="sm:hidden">Watch intro</span>
                <span className="hidden sm:block">Watch the intro video</span>
              </button>
            </div>
          </HorizontalLineWrapper>
        </div>
        <div>
          <div className="max-w-xl">
            <HorizontalLineWrapper>
              <div className="grid gap-10">
                <h3 className="font-medium text-gray-400">
                  When you build UI components that are used by{" "}
                  <span className="text-white">
                    tens of thousands of developers
                  </span>
                  , you learn to really care about the details, like:
                </h3>
                <div>
                  <ul className="space-y-6 text-gray-400 [&_span]:text-white">
                    <List>
                      <span>Building layouts that don&apos;t break</span> when
                      the content is longer than you planned for in Figma
                    </List>
                    <List>
                      Making a table scrollable,{" "}
                      <span>without the content getting cropped</span> by the
                      page padding
                    </List>
                    <List>
                      <span>Automatically aligning icons</span> in dropdown
                      menus, even when some items are just text
                    </List>
                    <List>
                      Making an entire card clickable,{" "}
                      <span>without destroying the experience</span> for screen
                      readers
                    </List>
                    <List>
                      <span>Fine-tuning click targets for mobile</span>, without
                      making everything else harder to maintain
                    </List>
                    <List>
                      Getting the border radius{" "}
                      <span>mathematically perfect</span> on nested elements,
                      without hard-coding magic numbers
                    </List>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-400 [&_span]:text-white">
                    <span>“Build UIs that don’t suck”</span> is a crash course
                    in some of the coolest tricks I&apos;ve picked up over the
                    years building things that need to be both beautiful and
                    bullet-proof.
                  </p>
                  <p className="text-gray-400 [&_span]:text-white">
                    <span>
                      Every day for a week I&apos;ll send you a short video
                      lesson
                    </span>
                    walking you through an interesting UI problem,{" "}
                    <span>as well as the code</span> so you can play with it
                    yourself and adapt it for your own projects.
                  </p>
                </div>
                <div>
                  <form className="relative w-full max-w-sm">
                    <input
                      placeholder="Enter your email"
                      className="w-full rounded-full bg-white px-4 py-2.5 pr-36 text-sm text-gray-950 placeholder:text-gray-600 focus-visible:outline-none"
                    />
                    <button className="absolute inset-y-0.5 right-0.5 inline-flex items-center justify-center rounded-full bg-gray-950 px-4 py-2 text-sm hover:bg-gray-950/90">
                      Get the course
                    </button>
                  </form>
                </div>
              </div>
            </HorizontalLineWrapper>
          </div>
        </div>
      </div>
      <div className="bg-pattern col-start-3 row-span-full hidden h-full border-x border-gray-400/20 sm:block" />
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <li className="ml-4 flex items-baseline gap-4">
      <div className="aspect-square size-1.5 bg-gray-500" />
      <p>{children}</p>
    </li>
  );
}
