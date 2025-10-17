import "./App.css";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full max-h-[100vh] overflow-hidden flex flex-col">
        <div className="w-full flex flex-col gap-1 overflow-hidden flex-1">
          <div className="header-container shrink-0">
            <Header />
          </div>
          {/* main container below the header */}
          <div className="main-content w-full flex-1 max-h-[90%] overflow-y-hidden">
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
