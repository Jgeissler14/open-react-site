import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
        <div className="flex items-center justify-center h-20">   
          <p className="font-medium text-white">
            Cloudzap
          </p>
      </div>
    </header>
  )
}
