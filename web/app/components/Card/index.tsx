
export interface CardProps {
  alt?: string;
  author?: string;
  img?: string;
  key?: string;
  title?: string;
}

export default function Card({ alt, author, img, key, title }: CardProps) {

  return (
    <div className="card_wrapper w-full h-full inline-flex flex-col relative box-border truncate" key={`${key}-${title}`}>
      <div className="card_thumbnail rounded-md relative ">
        <div className="card_thumbnail_container relative rounded-md w-full">
          <img
            alt={alt}
            className="thumbnail max-h-52 absolute block top-0 left-0 h-full w-full rounded-md object-cover object-center cursor-pointer"
            loading="lazy"
            src={img}
          />
        </div>
      </div>
      <div className="card_copy flex flex-col gap-x-4 items-baseline truncate">
        <div className="copy_container flex flex-col">
          <a href="/" className="title text-white w-full truncate">{title}</a>
          <div className="author_container">
            <span className="author_details">
              <div className="author_text text-sm text-gray-400 relative w-full">
                <a className="relative w-full" href="/">{author}</a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
