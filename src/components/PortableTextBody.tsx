import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1400).fit("max").url();
      return (
        <figure className="rt-figure">
          <Image
            src={url}
            alt={value.alt || ""}
            width={1400}
            height={900}
            sizes="(max-width: 800px) 100vw, 720px"
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
};

export function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
