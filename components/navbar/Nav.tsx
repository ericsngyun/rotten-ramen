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

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className = "flex justify-between px-8 py-4">
        <h1 className = "logo text-2xl text-[#18181c]">
          rotten-ramen
        </h1>
        <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
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

export default Nav