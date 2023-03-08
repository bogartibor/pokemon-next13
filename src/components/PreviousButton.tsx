"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export default function PreviousButton({ previous }: { previous: number }) {
  return (
    <Link href={`/${previous}`}>
      <Button variant="outlined">Previous page</Button>
    </Link>
  );
}
