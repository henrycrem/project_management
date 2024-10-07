"use server";

import { db } from "@/prisma/db";
import { CategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";
import { UserProps } from "@/types/types";
import bcrypt from "bcrypt";

export async function getAllClients(userId: string | undefined) {
  if(userId){
    
    try {
      const clients = await db.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where:{
          role : "CLIENT",
          userId
        }
      });
  
      return clients;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export async function createClient(data: UserProps) {
  const { email, password, firstName, lastName, name, phone, image } = data;
  try {
    // Hash the PAASWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        error: `Email already exists`,
        status: 409,
        data: null,
      };
    }
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        name,
        phone,
        image,
      },
    });
    // revalidatePath("/dashboard/users");
    // console.log(newUser);
    return {
      error: null,
      status: 200,
      data: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      error: `Something Went wrong, Please try again`,
      status: 500,
      data: null,
    };
  }
}


export async function updateClientById(id: string, data: UserProps) {
  try {
    const updatedClient = await db.user.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/clients");
    return updatedClient;
  } catch (error) {
    console.log(error);
  }
}


export async function getClientById(id: string) {
  try {
    const client = await db.user.findUnique({
      where: {
        id,
      },
    });
    return client;
  } catch (error) {
    console.log(error);
  }
}


