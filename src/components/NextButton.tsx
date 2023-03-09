"use client";

import { Box, Button, LinearProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NextButton({ next }: { next: number }) {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = () => {
    setIsRedirecting(true);
    router.push(`/${next}`);
  };

  return (
    <Box sx={{ position: "relative", width: "fit-content" }}>
      <Button disabled={isRedirecting} onClick={handleClick} variant="outlined">
        Next page
      </Button>
      {isRedirecting && (
        <LinearProgress
          color="inherit"
          sx={{
            position: "absolute",
            color: "gray",
            bottom: "0",
            borderRadius: "0 0 7px 7px",
            width: "100%",
          }}
        />
      )}
    </Box>
  );
}
