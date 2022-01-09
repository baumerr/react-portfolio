import React, { useEffect } from "react";

function Nav({ categories, currentCategory, setCurrentCategory }) {
  useEffect(() => {
    document.title = currentCategory.name;
    if(document.title === 'undefined') {
        document.title = 'Randal Baumer'
    }
  }, [currentCategory]);

  return (
    <header className="container-fluid">
      <div className="row justify-content-start">
        <div className="col-4">
          <h3>Randal Baumer</h3>
        </div>

        <div className="col-8">
          <ul className="flex-row list-group">
            {categories.map((category) => (
              <div className="col" >
                <li className="mx-2 list-group-item list" key={category.name}>
                  <span onClick={() => setCurrentCategory(category)}>
                    {category.name}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
