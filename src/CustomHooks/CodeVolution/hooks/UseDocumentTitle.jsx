import { useEffect } from "react";

const UseDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
  console.log(`this is count increases from UseDocumentTitle ${count}`);
};

export default UseDocumentTitle;
