"use client";

import { getAurinkoAuthUrl } from "@/lib/aurinko";
import { Button } from "./ui/button";

const LinkAccountButton = () => {
  return (
    <Button
      onClick={async () => {
        window.location.href = authUrl;
      }}
    >
      Link Account
    </Button>
  );
};

export default LinkAccountButton;
