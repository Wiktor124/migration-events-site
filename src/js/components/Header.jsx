const Tab = ( { category, label }) => {
  return <button data-category= { category }>{ label }</button>
}

export const Header = () => {
  return (
    <header id="header" className="header">
      <a href="./account.html" id="my-account">My account </a>
      <div id="tabs" className="header__tabs">
          <Tab category= "music" label= "Music" />
          <Tab category= "sports" label= "Sports" />
          <Tab category= "business" label= "Business" />
          <Tab category= "food" label= "Food" />
          <Tab category= "art" label= "Art" />
      </div>
    </header>
  )
}