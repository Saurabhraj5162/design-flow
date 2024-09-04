// import React, { useState } from 'react';
// import './diagram_canvas.css';

// // Diagram Canvas Component
// const DiagramCanvas = () => {
//   const [droppedComponents, setDroppedComponents] = useState([]);

//   const onDrop = (e) => {
//     const componentType = e.dataTransfer.getData('componentType');
//     const canvas = e.target.getBoundingClientRect();
//     const x = e.clientX - canvas.left;
//     const y = e.clientY - canvas.top;
    
//     setDroppedComponents([
//       ...droppedComponents,
//       { type: componentType, x, y }
//     ]);
//   };

//   const allowDrop = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="diagram-canvas" onDrop={onDrop} onDragOver={allowDrop}>
//       <h3>System Design Canvas</h3>
//       <div className="canvas-area">
//         {droppedComponents.map((component, index) => (
//           <div
//             key={index}
//             className={`component-on-canvas ${component.type}`}
//             style={{ left: component.x, top: component.y }}
//           >
//             {component.type}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DiagramCanvas;


import React, { useState } from 'react';
import './diagram_canvas.css';

// Diagram Canvas Component
const DiagramCanvas = ({ components }) => {
  return (
    <div className="diagram-canvas">
      <h3>System Design Canvas</h3>
      <div className="canvas-area">
        {components.map((component, index) => (
          <div
            key={index}
            className={`component-on-canvas ${component.type}`}
            style={{ left: component.x, top: component.y }}
          >
            {component.type}: {component.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagramCanvas;
