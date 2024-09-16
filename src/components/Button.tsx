'use client'

import { LuxButton } from "@lux-design-system/web-components-react/dist/components"
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Button (props: any) {
  useEffect(() => {
    import("@lux-design-system/web-components-stencil/dist/lux/lux.esm.js");
  }, []);

  return (
    <LuxButton {...props}>{props.children}</LuxButton>
  )
};
