import useFiles from "../../../hooks/useFiles";
import Loading from "../../../components/utils/Loading";

const ProductosDocs = ({ body, reloadFiles, token }) => {
  const { data: files, loading: loadingFiles } = useFiles(
    token,
    body,
    reloadFiles
  );

  if (loadingFiles) {
    return <Loading />;
  }

  return <div>ProductosDocs</div>;
};

export default ProductosDocs;
