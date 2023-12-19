import DramasList from '../../components/DramasList/DramasList';

function Kdramas({ topDramas, loading }) {
  return (
    <main className="dramas-top">
      {loading ? <p>... Loading</p> : <DramasList cards={topDramas} />}
    </main>
  );
}
export default Kdramas;
