"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export default function NextButton({ next }: { next: number }) {
  return (
    <Link href={`/${next}`}>
      <Button style={{ float: "right" }} variant="outlined">
        Next page
      </Button>
    </Link>
  );
}
