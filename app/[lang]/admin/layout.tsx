// app/admin/AdminLayout.tsx
"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/app/context/Auth/AuthContext";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import RentModal from "@/app/components/modals/RentModal";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="">
      <LoginModal />
      <RegisterModal />
      <RentModal />
      <AuthProvider>
        <div className="admin-layout">{children}</div>
      </AuthProvider>
    </div>
  );
};

export default AdminLayout;
