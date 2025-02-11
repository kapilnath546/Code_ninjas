
import { Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Career", href: "#" },
      { name: "Blog", href: "#" },
    ],
    tools: [
      { name: "Analytics", href: "#" },
      { name: "Website& Extras", href: "#" },
      { name: "Publishing", href: "#" },
      { name: "Pricing", href: "#" },
    ],
    support: [
      { name: "Help Centre", href: "#" },
      { name: "Tutorial", href: "#" },
      { name: "Status", href: "#" },
      { name: "Webinar", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Location */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">BANKBRIDGE</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Location</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-4 relative">
                  <div className="absolute inset-0 bg-[#FF9933] h-1/3 top-0"></div>
                  <div className="absolute inset-0 bg-white h-1/3 top-1/3"></div>
                  <div className="absolute inset-0 bg-[#138808] h-1/3 top-2/3"></div>
                </div>
                <span className="text-sm">INDIA</span>
              </div>
            </div>
          </div>

          {/* Footer Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-gray-600 hover:text-primary transition-colors duration-200",
                        "story-link"
                      )}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              Bridgebank 2025 all rights are reserved
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Email:</span>
              <a
                href="mailto:bridgebank@gmail.com"
                className="text-sm text-primary hover:underline"
              >
                bridgebank@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Social:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-primary transition-colors duration-200 hover-scale"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
