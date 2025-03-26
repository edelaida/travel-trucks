import css from "./Header.module.css";

export const Header = () => {
  
  return (
    <header>      
      <div className={css.presentation} >
        <button className={css.btnclick} >view now</button>
      </div>
    </header>
  );
}
