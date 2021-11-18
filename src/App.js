import logo from './logo.svg';
import Categories from './Categories';
import Menu from './Menu';
import menu from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const [menuItems, getMenuItems] = useState(menu);
  const [CategoriesItem, getCategories] = useState([]);

  const filterItem = (category) => {
    if (category === 'all') {
      getMenuItems(menu)
    } else {
      const newItem = menu.filter((item) => item.category === category);
      getMenuItems(newItem)
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} />
        <Menu item={menuItems} />
      </section>
    </main>
  );
}

export default App;
