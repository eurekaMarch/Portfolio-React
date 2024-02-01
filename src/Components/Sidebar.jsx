import Logo from '../assets/logo.svg'

function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="#home" className="sidebar__logo">
        <img src={Logo} />
      </a>

      <nav className='sidebar__nav'>
        <div className='sidebar__menu'>
          <ul className='sidebar__list'>
            <li className='sidebar__item'>
              <a href='#home' className='sidebar__link'>
                <i className='icon-home'></i>
              </a>
            </li>

            <li className='sidebar__item'>
              <a href='#about' className='sidebar__link'>
                <i className='icon-user-following'></i>
              </a>
            </li>

            <li className='sidebar__item'>
              <a href='#services' className='sidebar__link'>
                <i className='icon-briefcase'></i>
              </a>
            </li>

            <li className='sidebar__item'>
              <a href='#resume' className='sidebar__link'>
                <i className='icon-graduation'></i>
              </a>
            </li>

            <li className='sidebar__item'>
              <a href='#portfolio' className='sidebar__link'>
                <i className='icon-layers'></i>
              </a>
            </li>

            <li className='sidebar__item'>
              <a href='#blog' className='sidebar__link'>
                <i className='icon-note'></i>
              </a>
            </li>

            <li className='sidebar__item'>
              <a href='#contact' className='sidebar__link'>
                <i className='icon-bubble'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='sidebar__footer'>
        <span className='sidebar__copyright'>&copy; 2022 - 2023</span>
      </div>
    </aside>
  )
}

export default Sidebar