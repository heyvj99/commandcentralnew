import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Settings, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Add search functionality here
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log("Logout clicked");
  };

  return (
    <motion.header
      className="flex items-center justify-between p-4 bg-background border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SidebarTrigger />
      </motion.div>

      <div className="flex items-center gap-4 ">
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <motion.div
          className="flex items-center gap-2"
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="ghost" size="icon" title="Settings">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" title="Logout" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
