import React from 'react'

const links = [
  {
    href: '/docs/protocol/intro',
    label: 'Docs',
  },
  {
    href: '/docs/api/overview',
    label: 'API',
  },
  {
    href: 'https://github.com/seaport-market',
    label: 'GitHub',
  },
  {
    href: 'https://seaport.mirror.xyz/',
    label: 'Blog',
  },
  {
    href: 'https://discord.gg/mXaqx6SnjP',
    label: 'Discord',
  },
]

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[9999] hidden w-full  bg-black text-white md:block">
      <nav className="relative mx-auto flex h-[70px] max-w-screen-xl items-center justify-center px-6 ">
        <div className="absolute left-5 inline-flex items-center gap-2">
          <img
            src="img/seaport.svg"
            alt="Reservoir Logo"
            className="h-6 w-6"
          />
          <div className="font-[Obvia] text-2xl font-bold">SeaPort</div>
        </div>
        <div>
          {links.map(({ href, label }) => (
            <a className="mx-4 hover:text-white " key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
