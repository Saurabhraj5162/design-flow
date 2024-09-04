import React from 'react';
import './component_library.css';

// Component Data
const components = [
  { id: 1, name: 'Database', type: 'database' },
  { id: 2, name: 'API Gateway', type: 'api-gateway' },
  { id: 3, name: 'Load Balancer', type: 'load-balancer' },
  { id: 4, name: 'Server', type: 'server' },
  { id: 5, name: 'Cache', type: 'cache' },
];

// Single Component for the Library
const Component = ({ name, type, onDragStart }) => {
  return (
    <div 
      className="component"
      draggable
      onDragStart={(e) => onDragStart(e, type)}
    >
      <p>{name}</p>
    </div>
  );
};

// Component Library
const ComponentLibrary = ({ onDragStart }) => {
  return (
    <div className="component-library">
      <h3>Component Library</h3>
      {components.map((component) => (
        <Component
          key={component.id}
          name={component.name}
          type={component.type}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
};

export default ComponentLibrary;
