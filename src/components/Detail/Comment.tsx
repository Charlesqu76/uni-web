"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CommentButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button variant="outline">comment</Button>
    </div>
  );
};

export default CommentButton;
