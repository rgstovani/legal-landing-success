
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#2C3E50] z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <NavigationMenu className="py-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " text-gray-100 hover:bg-[#34495E] hover:text-white"}
                onClick={() => scrollToSection("about")}
              >
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " text-gray-100 hover:bg-[#34495E] hover:text-white"}
                onClick={() => scrollToSection("services")}
              >
                Serviços
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " text-gray-100 hover:bg-[#34495E] hover:text-white"}
                onClick={() => scrollToSection("testimonials")}
              >
                Depoimentos
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
