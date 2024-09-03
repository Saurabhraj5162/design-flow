import React from 'react';

function DiagramPage() {
  return (
    <div className="diagram-page">
      <h2>System Design</h2>
      <div className="diagram-canvas">
        {/* Placeholder for diagramming tool */}
        <p>Drag and drop components here to start designing your system.</p>
      </div>
      <div className="component-library">
        {/* Placeholder for component library */}
        <h3>Component Library</h3>
        <ul>
          <li>Database</li>
          <li>Server</li>
          <li>API Gateway</li>
        </ul>
      </div>
    </div>
  );
}

export default DiagramPage;