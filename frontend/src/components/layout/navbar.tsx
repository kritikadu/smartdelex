import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, FileText, BarChart3, Home, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: "Tenders", path: "/tenders", icon: <FileText className="w-4 h-4 mr-2" /> },
    { name: "Vendor Dashboard", path: "/vendor", icon: <Building2 className="w-4 h-4 mr-2" /> },
    { name: "Admin Analytics", path: "/admin", icon: <BarChart3 className="w-4 h-4 mr-2" /> },
    { name: "Property Compare", path: "/properties", icon: <Home className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight font-heading">SmartDealX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
          <ThemeToggle />
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                    <div
                      className={`flex items-center p-2 text-lg font-medium rounded-md hover:bg-muted ${
                        location === item.path ? "text-primary bg-muted/50" : "text-foreground"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </div>
                  </Link>
                ))}
                <Button className="w-full mt-4">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
