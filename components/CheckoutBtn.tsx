"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserProps } from "./Header";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

async function CheckoutBtn({ user }: { user: KindeUser | null }) {
  console.log(user);
  const [loading, setLoading] = useState(false);
  const creatCheckoutSession = async () => {
    if (!user?.id) return;

    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", user.id, "checkout_sessions"),
      {
        price: "price_1JG2XwLj8Y8Z3XqV2X3fXa7l",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    console.log(window.location.origin);
  };
  return (
    <Button
      onClick={() => creatCheckoutSession()}
      className=" mt-5"
      variant={"outline"}
    >
      Sign up
    </Button>
  );
}

export default CheckoutBtn;
