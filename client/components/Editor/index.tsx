import { useCallback, useEffect, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

// TODO: we can optimise this better
function useResetKey(value: string) {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((n) => n + 1);
  }, [value]);
  return key;
}

interface IProps {
  value: string;
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "heading":
      return <h1 {...attributes}>{children}</h1>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Editor = (props: IProps) => {
  const { value } = props;
  const key = useResetKey(value);

  const initialValue = [
    {
      type: "heading",
      children: [{ text: "Heading" }],
    },
    {
      type: "paragraph",
      children: [{ text: value }],
    },
  ];

  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => <Element {...props} />, []);

  return (
    <Slate editor={editor} value={initialValue} key={key}>
      <Editable renderElement={renderElement} />
    </Slate>
  );
};

export default Editor;
