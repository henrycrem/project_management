import CategoryForm from "@/components/Forms/CategoryForm";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {


  return (
    <div className="p-8">
      <CategoryForm />
    </div>
  );
}
