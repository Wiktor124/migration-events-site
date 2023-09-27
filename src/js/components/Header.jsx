const Tab = ( { label, category }) => {
  console.log(label);
  return <button data-category= { category }>{ label }</button>
}

export const Header = ({ tabs }) => {
  return (
    <header id="header" className="header">
      <a href="./account.html" id="my-account">My account </a>
      <div id="tabs" className="header__tabs">
          {tabs.map(({ label, category }, index) => <Tab key={index} category={category} label={label} /> )}
      </div>
    </header>
  )
}