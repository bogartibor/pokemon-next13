"use client";

import { PAGE_SIZE } from "@/constants/page";
import { Card, CardActionArea, CardContent, Skeleton } from "@mui/material";

const SkeletonList = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(15rem,1fr))",
        gap: "16px",
      }}
    >
      {Array.from({ length: PAGE_SIZE }, (_, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea
              style={{ flexDirection: "column", padding: "10px" }}
            >
              <Skeleton variant="rounded" width={150} height={150} />
              <CardContent>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default SkeletonList;
