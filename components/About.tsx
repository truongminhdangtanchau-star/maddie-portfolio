<div className="about-image-float relative mx-auto w-full max-w-md">
  <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.25rem] bg-pink-200/60 blur-sm" />

  <div className="spotify-card relative overflow-hidden rounded-[2.25rem] border border-pink-200/70 bg-[#171217] p-4 shadow-[0_35px_100px_rgba(219,39,119,0.32)]">
    <div className="mb-4 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-pink-200/60">
          Now Playing
        </p>
        <p className="mt-1 text-sm font-medium text-white">
          Maddie Nguyen
        </p>
      </div>

      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-rose-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
      </div>
    </div>

    <div className="relative overflow-hidden rounded-[1.7rem] bg-pink-100 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-square">
        <Image
          src="/maddie.png"
          alt="Portrait of Maddie Nguyen"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" />
        <div className="spotify-shine absolute inset-0" />
      </div>
    </div>

    <div className="mt-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
            Creative Account Executive
          </h3>
          <p className="mt-1 text-sm text-pink-100/60">
            Music · Entertainment · Brand Campaigns
          </p>
        </div>

        <button
          aria-label="Play profile"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-400 text-white shadow-[0_12px_30px_rgba(244,114,182,0.45)] transition hover:scale-105"
        >
          <svg
            className="ml-0.5 h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>
        </button>
      </div>

      <div className="mt-6">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="spotify-progress h-full w-[68%] rounded-full bg-pink-300" />
        </div>

        <div className="mt-2 flex justify-between text-xs text-pink-100/45">
          <span>0:24</span>
          <span>3:12</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
          Client Servicing
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
          Campaign Flow
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
          Artist-side Energy
        </span>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-5 -right-4 rounded-full border border-pink-200 bg-white/90 px-5 py-3 text-sm font-medium text-pink-600 shadow-lg backdrop-blur">
    Available for creative teams
  </div>
</div>