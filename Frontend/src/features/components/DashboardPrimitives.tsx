type SectionHeadingProps = {
  title: string;
  action?: string;
};

export function SectionHeading({
  title,
  action = "View All",
}: SectionHeadingProps) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h2 className="text-[10px] font-semibold text-[#f5edf2]">{title}</h2>
      <button className="text-[8px] text-[#92808f] transition hover:text-white">
        {action}
      </button>
    </div>
  );
}

type AlbumArtProps = {
  className: string;
  symbol?: string;
  image?: string;
};

export function AlbumArt({
  className,
  symbol = "✦",
  image,
}: AlbumArtProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-md bg-linear-to-br ${className}`}
    >
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute -left-1/3 top-1/3 h-px w-[170%] rotate-[-40deg] bg-white/20" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-white/3" />
      <span className="absolute inset-0 flex items-center justify-center text-xl text-white/35">
        {symbol}
      </span>
    </div>
  );
}
