import CategoryForm from "@/components/Forms/CategoryForm";
import ClientForm from "@/components/Forms/ClientForm";
import { authOptions } from "@/config/auth";
import { useAuth } from "@/config/getUser";
import { getServerSession } from "next-auth";

import React from "react";

export default async function page() {
  const { user } = await useAuth();
 
  return (
    <div className="p-8">
      <ClientForm userId={user?.id} />
    </div>
  );
}
