import { hash } from "bcryptjs";
import { useSession } from "next-auth/react";

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function checkUserVerified() {
  const { data: session, status } = useSession();
  if (status === "authenticated" && session.user?.verified) {
    return true;
  } else {
    return false;
  }
}
