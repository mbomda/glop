import { getMDXComponent, useMDXComponent } from "next-contentlayer2/hooks";

const components = {
  h1: ({ ...props }) => (
    <h1
      className={"mt-2 text-4xl font-bold tracking-tight text-red-300"}
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h1
      className={"mt-2 text-4xl font-bold tracking-tight text-red-300"}
      {...props}
    />
  ),
  p: ({ ...props }) => <p className="mt-8 text-base leading-7" {...props} />,
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const component = useMDXComponent(code);
  return (
    <div>
      <Component components={components} />
    </div>
  );
}
