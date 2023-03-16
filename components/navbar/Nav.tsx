import React from 'react'
import { Button } from '../ui/Button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/NavigationMenu"
import { cn } from '@/lib/utils'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className = "flex justify-between px-8 py-4">
        <h1 className = "logo text-4xl text-[#18181c] font-bold">
            rotramen
        </h1>
        <div>
          <NavigationMenu className = "navmenu">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Anime</NavigationMenuTrigger>
                <NavigationMenuContent className = "p-6 grid columns-2">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Manga</NavigationMenuTrigger>
                <NavigationMenuContent className = "p-6 grid columns-2">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Webtoon</NavigationMenuTrigger>
                <NavigationMenuContent className = "p-6 grid columns-2">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div >
          <Button>
            Sign Up
          </Button>
          <Button variant = "link">
            Sign In
          </Button>
        </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Nav