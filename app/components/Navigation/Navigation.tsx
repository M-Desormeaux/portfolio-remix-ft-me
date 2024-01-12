const PAGE_LINKS = [
  { url: "/", label: "Home" },
  { url: "/resume", label: "Resume" },
];

interface PageLabelArgTypes {
  pathname: string;
}

const PageLabel = ({ pathname }: PageLabelArgTypes) => (
  <span className="text-2xl font-semibold text-slate-800">
    {pathname === "/"
      ? "Home"
      : pathname
          .slice(1)
          .split("")
          .map((num, index) => {
            if (index === 0) {
              return `${num}`.toUpperCase();
            }
            return num;
          })
          .join("")}
  </span>
);

interface PageLinksArgTypes {
  pathname: string;
  links: { url: string; label: string }[];
}

const PageLinks = ({ pathname, links }: PageLinksArgTypes) => {
  if (links.length === 0) return null;

  return (
    <div className="hidden underline underline-offset-2 sm:flex sm:gap-4">
      {links.map((link, index) => {
        if (link.url === pathname) return null;

        return (
          <a className="hover:text-bold" key={index} href={link.url}>
            {link.label}
          </a>
        );
      })}
    </div>
  );
};

interface NavigationArgumentTypes {
  pathname: string;
}

export const Navigation = ({ pathname }: NavigationArgumentTypes) => {
  const links = PAGE_LINKS;

  return (
    <nav className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-slate-200 px-6">
      <PageLabel pathname={pathname} />
      <PageLinks pathname={pathname} links={links} />
      <div className="sm:hidden">Menu Dropdown</div>
      {/* menu dropdown will be headlessUI maybe? */}
    </nav>
  );
};
