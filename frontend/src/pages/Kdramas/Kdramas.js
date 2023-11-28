import DramasList from '../../components/DramasList/DramasList';

function Kdramas(topDramas) {
  const arr = topDramas.topDramas;
  return (
    <main className='dramas-top'>
      <DramasList cards={arr}/>
    </main>
  );
}
export default Kdramas;
