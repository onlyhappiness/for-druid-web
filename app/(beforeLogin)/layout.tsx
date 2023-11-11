"use client";

import Container from "@/components/Container";
import useMyInfoQuery from "@/hooks/auth/queries/useMyInfo";
import { redirect } from "next/navigation";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  const { data, error } = useMyInfoQuery();

  if (data) {
    redirect("/home");
  }

  return (
    <>
      <Container className="w-full h-screen">{children}</Container>
    </>
  );
};

export default SignUpLayout;
