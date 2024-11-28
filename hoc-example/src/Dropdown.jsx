const Dropdown =({dropdownItems,role})=>{
    return (
        <div>
            <button className="dropdown-button">
        {role === 'admin' ? 'Admin Menu' : 'Menu'}
      </button>
      <div className="dropdown-content">
        {/* Conditionally render groups or items */}
        {role === 'admin' ? (
          dropdownItems.map((group, index) => (
            <div key={index} className="dropdown-group">
              <h4>{group.label}</h4>
              {group.items.map((item, i) => (
                <div key={i} className="dropdown-item">{item}</div>
              ))}
            </div>
          ))
        ) : (
          dropdownItems.map((item, index) => (
            <div key={index} className="dropdown-item">{item}</div>
          ))
        )}
      </div>
            
        </div>
    )
}

export default Dropdown