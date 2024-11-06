import { useParams } from "react-router-dom";

const GameDetailPage = () => { 
  const params = useParams();
  return <h2>game {params.id}</h2>;
};

export default GameDetailPage;
