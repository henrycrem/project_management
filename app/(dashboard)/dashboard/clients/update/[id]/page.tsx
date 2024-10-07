import { getCategoryById } from "@/actions/categories";
import { getClientById } from "@/actions/clients";
import CategoryForm from "@/components/Forms/CategoryForm";
import ClientForm from "@/components/Forms/ClientForm";
import React from "react";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await getClientById(id);
  return (
    <div className="p-8">
      <ClientForm initialData={user} editingId={id} />
    </div>
  );
}
