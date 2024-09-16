'use client'

import { LuxIconChevronLeft } from "@lux-design-system/web-components-react/dist/components"
import { useEffect } from "react";

export default function IconChevronLeft () {
  useEffect(() => {
    import("@lux-design-system/web-components-stencil/dist/lux/lux.esm.js");
  }, []);

  return (
    <LuxIconChevronLeft />
  )
};
