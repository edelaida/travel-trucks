import  fon  from '../components/images/fon.png'

export const HomePages = () => {
  const handlClick = () => {
      console.log({campers});
      
  }
    return (
      <div >
        <img src={fon} alt="container" />
        <button onClick={(handlClick)}>campers</button>
      </div>
    );
  };
 