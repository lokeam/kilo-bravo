
export interface AvatarProps {
  alt?: string;
  img?: string;
  initials: string;
}

export default function Avatar({ alt, img, initials}: AvatarProps) {
  const truncatedInitials = initials.length > 2 ? initials.substring(0, 2) : initials;

  return (
    <div className="flex items-center justify-center space-x-4 rounded avatar text-white">
      <div aria-label="Kilo Bravo user avatar" className="relative">
        {
          img === '' ? (
            <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 h-10 w-10 rounded-full">
              <span className="font-medium text-gray-600 dark:text-gray-300">{truncatedInitials}</span>
            </div>
          ) : (
            <img
              alt={(alt === '') ? 'user avatar' : alt}
              className="rounded-full h-10 w-10"
              src={img}
            />
          )
        }
      </div>
    </div>
  )
}
