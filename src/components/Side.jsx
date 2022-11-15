function Side({ sections, setActive }) {
  return (
    <div className="side-bar">
      {sections.map((section) => {
        return (
          <a
            key={section.id}
            className={section.active ? "active" : undefined}
            onClick={() => setActive(section.id)}
          >
            <section.icon
              className={`icon ${section.active ? "icon-active" : undefined}`}
            />
            <span>{section.name}</span>
          </a>
        );
      })}
    </div>
  );
}

export default Side;
