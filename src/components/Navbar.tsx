import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="fixed top-0 left-0 right-0 bg-[#2C3E50] z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <NavigationMenu className="py-4">
          <NavigationMenuList>
            <NavigationMenuItem className="\n">
              <NavigationMenuLink onClick={() => scrollToSection("about")} className="px-[30px]">
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => scrollToSection("services")} className="px-[30px]">
                Serviços
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => scrollToSection("testimonials")} className="px-[30px]">
                Depoimentos
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>;
};
export default Navbar;